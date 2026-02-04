const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Paths
const missingTxtPath = path.resolve('produtos_sem_foto.txt');
const inputExcelPath = path.resolve('TABELADEPRODUTOS_PREENCHIDA.xlsx');
const outputExcelPath = path.resolve('PRODUTOS_SEM_FOTO_PARA_BAIXAR.xlsx');

// 1. Read Missing Products List
console.log('Reading missing products list...');
if (!fs.existsSync(missingTxtPath)) {
    console.error('Missing products file not found.');
    process.exit(1);
}
const missingContent = fs.readFileSync(missingTxtPath, 'utf8');
const missingLines = missingContent.split('\n').filter(l => l.trim().length > 0);

// Parse lines: "[BRAND] Name -> /path/to/image.png"
const missingItems = missingLines.map(line => {
    // Regex to match: [BRAND] Product Name -> /path/image.png
    const match = line.match(/^\[(.*?)\] (.*?) -> (.*)$/);
    if (match) {
        return {
            brand: match[1],
            name: match[2],
            path: match[3],
            filename: path.basename(match[3])
        };
    }
    return null;
}).filter(i => i !== null);

console.log(`Parsed ${missingItems.length} missing items.`);

// 2. Read Original Excel for Links
console.log('Reading full product table for links...');
const workbook = XLSX.readFile(inputExcelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// Helper to normalize strings for matching
function normalize(str) {
    if (!str) return '';
    return str.toLowerCase()
        .replace(/[!@#$%^&*.,;:\/-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// Build a lookup map from Excel
// We will use (Brand + Name) as key hopefully, or just fuzzy match name
const excelProducts = rows.slice(2).map(row => ({
    brand: normalize(row[0]),
    namePackage: normalize(row[2]), // "Nome da Embalagem"
    fullName: normalize(row[9]),    // "Nome que esta na embalagem" (often more descriptive)
    link: row[10]                   // "Link do produto" (Index 10 based on previous dumps)
})).filter(p => p.brand);

// 3. Match and Build Output Data
const outputData = [['Nome do Produto', 'Nome do Arquivo para Salvar', 'Link Oficial']];

missingItems.forEach(item => {
    const pName = normalize(item.name);
    const pBrand = normalize(item.brand);

    // Attempt match
    // Priority: Full Name match within same brand
    let match = excelProducts.find(ep =>
        ep.brand.includes(pBrand) && (ep.fullName.includes(pName) || pName.includes(ep.fullName))
    );

    if (!match) {
        // Fallback: Name Package match
        match = excelProducts.find(ep =>
            ep.brand.includes(pBrand) && (ep.namePackage.includes(pName) || pName.includes(ep.namePackage))
        );
    }

    // Add to output
    outputData.push([
        item.name,
        item.filename,
        match ? match.link : 'Não encontrado'
    ]);
});

// 4. Create New Excel
console.log('Generating output Excel...');
const newWorkbook = XLSX.utils.book_new();
const newSheet = XLSX.utils.aoa_to_sheet(outputData);

// Adjust column widths
newSheet['!cols'] = [
    { wch: 50 }, // Name
    { wch: 40 }, // Filename
    { wch: 60 }  // Link
];

XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Faltam Fotos");
XLSX.writeFile(newWorkbook, outputExcelPath);

console.log(`Successfully created: ${outputExcelPath}`);
