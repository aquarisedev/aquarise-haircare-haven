const fs = require('fs');
const path = require('path');

const productsPath = path.resolve('src/data/products.ts');

const content = fs.readFileSync(productsPath, 'utf8');

// Parse products
const startMarker = 'export const products: Product[] = [';
const startIndex = content.indexOf(startMarker);
const arrayString = content.substring(startIndex + startMarker.length).replace(/;$/, '').trim();
const products = eval('[' + arrayString);

// Find 300ml version to copy from
const sourceProduct = products.find(p => p.name.includes('Shampoo Cachos Sim') && p.size === '300ml');

if (!sourceProduct) {
    console.error('Source product (300ml) not found!');
    process.exit(1);
}

// Find max ID
const maxId = Math.max(...products.map(p => p.id));

const newProduct = {
    ...sourceProduct,
    id: maxId + 1,
    name: 'Shampoo Cachos Sim',
    size: '1L',
    image: '/images/products/haskell/cachos-sim-shampoo-1l.webp',
    price: sourceProduct.price * 2.5 // Approximate price scaling? Or just keep same? Let's scale a bit to be realistic, user can edit. actually user didn't specify price.
    // I'll keep price same to be safe as per previous thought.
};
newProduct.price = sourceProduct.price; // Revert to same price

products.push(newProduct);

console.log('Added new product:', newProduct);

// Reconstruct file
// We need to keep the interface definition at the top
const interfaceDef = content.substring(0, startIndex + startMarker.length);

// Get the part before the array
const header = content.substring(0, startIndex);
// customized reconstruction to look like TS
const jsonContent = JSON.stringify(products, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

const finalContent = `${header}export const products: Product[] = ${jsonContent};`;

fs.writeFileSync(productsPath, finalContent);
console.log('Done.');
