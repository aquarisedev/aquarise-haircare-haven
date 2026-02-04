const fs = require('fs');
const path = require('path');

const productsPath = path.resolve('src/data/products.ts');
const content = fs.readFileSync(productsPath, 'utf8');

const startMarker = 'export const products: Product[] = [';
const startIndex = content.indexOf(startMarker);
const arrayString = content.substring(startIndex + startMarker.length).replace(/;$/, '').trim();
const products = eval('[' + arrayString);

const categories = [...new Set(products.map(p => p.category))];
console.log('Categories:', categories);

const brands = [...new Set(products.map(p => p.brand))];
console.log('Brands:', brands);
