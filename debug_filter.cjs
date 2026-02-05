const fs = require('fs');
const path = require('path');

// Mock content reading since we can't import .ts directly in node easily without compilation
// We will extract the array manually or just mock the data object based on what we saw
// Actually, let's just use regex to extract the specific product block and verify its fields
const content = fs.readFileSync(path.join(__dirname, 'src/data/products.ts'), 'utf8');

// Extract all products into a basic array of objects
const products = [];
const blockRegex = /\{[\s\S]*?id:\s*(\d+)[\s\S]*?name:\s*"([^"]*)"[\s\S]*?brand:\s*"([^"]*)"[\s\S]*?category:\s*"([^"]*)"[\s\S]*?groups:\s*\[([\s\S]*?)\][\s\S]*?\}/g;

let match;
while ((match = blockRegex.exec(content)) !== null) {
    const groupsRaw = match[5];
    const groups = groupsRaw.replace(/"/g, '').replace(/,/g, '').split('\n').map(s => s.trim()).filter(s => s);

    products.push({
        id: parseInt(match[1]),
        name: match[2],
        brand: match[3],
        category: match[4],
        groups: groups
    });
}

console.log(`Loaded ${products.length} products.`);

const brandParam = "ACESSORIOS";
const filtered = products.filter((product) =>
    product.brand === "ACESSORIOS" ||
    product.category === "Acessórios" ||
    product.groups.includes("ACESSÓRIOS")
);

console.log(`Filtered products count: ${filtered.length}`);
const brush = filtered.find(p => p.id === 800);
if (brush) {
    console.log("Brush FOUND in filter results!");
    console.log(JSON.stringify(brush, null, 2));
} else {
    console.log("Brush NOT found in filter results.");
    const actualBrush = products.find(p => p.id === 800);
    console.log("Actual brush data:", JSON.stringify(actualBrush, null, 2));

    console.log("Check:");
    console.log(`Brand match (${actualBrush.brand} === ACESSORIOS):`, actualBrush.brand === "ACESSORIOS");
    console.log(`Category match (${actualBrush.category} === Acessórios):`, actualBrush.category === "Acessórios");
    console.log(`Groups include ACESSÓRIOS:`, actualBrush.groups.includes("ACESSÓRIOS"));
}
