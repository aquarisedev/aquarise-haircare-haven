
const fs = require('fs');
const path = require('path');

// Use current working directory
const projectRoot = process.cwd();
const productsFile = path.join(projectRoot, 'src', 'data', 'products.ts');
const publicDir = path.join(projectRoot, 'public');

console.log('Project Root:', projectRoot);
console.log('Reading:', productsFile);

try {
    if (!fs.existsSync(productsFile)) {
        console.error('Products file not found!');
        process.exit(1);
    }

    const content = fs.readFileSync(productsFile, 'utf8');

    // We need to capture the object structure loosely
    // { ... name: "X", ... image: "Y" }
    // Since properties can be in any order, we iterate through the file object-by-object roughly.
    // Or better, let's just find all matches of image: "..." and try to map them back to a name.
    // Actually, the previous regex was okay but strictly enforced order name -> brand -> image.
    // Let's relax it or just regex for each block.

    // Splitting by objects might be safer
    const blocks = content.split('  {');
    const missingImages = [];

    for (const block of blocks) {
        if (!block.includes('image:')) continue;

        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        const brandMatch = block.match(/brand:\s*"([^"]+)"/);
        const imageMatch = block.match(/image:\s*"([^"]+)"/);

        if (nameMatch && imageMatch) {
            const name = nameMatch[1];
            const brand = brandMatch ? brandMatch[1] : 'UNKNOWN';
            const imagePath = imageMatch[1];

            if (imagePath.startsWith('http')) continue;

            // Remove query params if any
            const cleanImagePath = imagePath.split('?')[0];
            const fullPath = path.join(publicDir, cleanImagePath);

            if (!fs.existsSync(fullPath)) {
                missingImages.push(`[${brand}] ${name} -> ${imagePath}`);
            }
        }
    }

    const outputPath = path.join(projectRoot, 'produtos_sem_foto.txt');
    fs.writeFileSync(outputPath, missingImages.join('\n'));

    console.log(`Found ${missingImages.length} products without images.`);
    console.log(`List saved to: ${outputPath}`);

} catch (err) {
    console.error('Error details:', err);
}
