import { products } from './src/data/products';
import * as XLSX from 'xlsx';
import path from 'path';

const EXCHANGE_RATE_BRL_TO_CHF = 0.1464;

// Helper to sort products
const sortedProducts = [...products].sort((a, b) => {
    // Sort by Brand
    if (a.brand < b.brand) return -1;
    if (a.brand > b.brand) return 1;

    // Then by Collection (handle undefined collections)
    const collectionA = a.collection || "";
    const collectionB = b.collection || "";
    if (collectionA < collectionB) return -1;
    if (collectionA > collectionB) return 1;

    // Then by Name
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

const data = sortedProducts.map(product => ({
    "Marca": product.brand,
    "Linha": product.collection || "Outros", // Default to "Outros" if no collection
    "Nome": product.name,
    "Preço (BRL)": product.price,
    "Preço (CHF)": parseFloat((product.price * EXCHANGE_RATE_BRL_TO_CHF).toFixed(2))
}));

const worksheet = XLSX.utils.json_to_sheet(data);

// Auto-adjust column widths (approximation)
const wscols = [
    { wch: 15 }, // Marca
    { wch: 20 }, // Linha
    { wch: 40 }, // Nome
    { wch: 15 }, // Price BRL
    { wch: 15 }  // Price CHF
];
worksheet['!cols'] = wscols;

const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Produtos");

const outputPath = path.resolve('produtos_suica.xlsx');
XLSX.writeFile(workbook, outputPath);

console.log(`Excel file created at: ${outputPath}`);
