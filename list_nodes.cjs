const fs = require('fs');
const path = require('path');

const workflowPath = path.join(__dirname, 'N8n', '01. Secretária (7).json');
const workflow = JSON.parse(fs.readFileSync(workflowPath, 'utf8'));

console.log("Nodes found:");
workflow.nodes.forEach(n => console.log(`- ${n.name} (ID: ${n.id})`));
