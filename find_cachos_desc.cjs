const XLSX = require('xlsx');
const path = require('path');

const excelPath = path.resolve('TABELADEPRODUTOS_PREENCHIDA.xlsx');
const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const cachosSim = rows.find(row => {
    const name = (row[2] || '').toLowerCase(); // Name Package
    const line = (row[1] || '').toLowerCase(); // Line
    return (line.includes('cachos sim') || name.includes('cachos sim')) && name.includes('shampoo');
});

if (cachosSim) {
    console.log('FOUND Cachos Sim Shampoo:');
    console.log('Description:', cachosSim[7]);
    console.log('Usage:', cachosSim[8]);
} else {
    console.log('Not found in Excel.');
}
