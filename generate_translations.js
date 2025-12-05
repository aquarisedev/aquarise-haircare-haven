import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsPath = path.join(__dirname, 'src', 'data', 'products.ts');
const content = fs.readFileSync(productsPath, 'utf8');

const regex = /id:\s*(\d+),[\s\S]*?description:\s*"(.*?)"/g;
let match;
const translations = {};

while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const description = match[2];
    translations[`product.${id}.description`] = description;
}

const generateResource = (prefix) => {
    const res = {};
    for (const [key, value] of Object.entries(translations)) {
        res[key] = `${prefix} ${value}`;
    }
    return res;
};

const output = `export const productTranslations = {
  en: {
    translation: ${JSON.stringify(generateResource('[EN]'), null, 2)}
  },
  "fr-CH": {
    translation: ${JSON.stringify(generateResource('[FR]'), null, 2)}
  },
  "pt-PT": {
    translation: ${JSON.stringify(generateResource('[PT-PT]'), null, 2)}
  },
  "pt-BR": {
    translation: ${JSON.stringify(generateResource('[PT-BR]'), null, 2)}
  },
  es: {
    translation: ${JSON.stringify(generateResource('[ES]'), null, 2)}
  }
};`;

const outputPath = path.join(__dirname, 'src', 'locales', 'productTranslations.ts');
fs.writeFileSync(outputPath, output);
console.log('Translations generated at ' + outputPath);
