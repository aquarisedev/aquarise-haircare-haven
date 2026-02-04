const fs = require('fs');
const path = require('path');

const workflowPath = path.join(__dirname, 'N8n', '01. Secretária (7).json');
const workflow = JSON.parse(fs.readFileSync(workflowPath, 'utf8'));

// 1. Find the 'Info' node by its fixed ID (from previous inspection) or by partial name match
// ID from Step 129: "f2dc081e-a702-40cd-86d4-5b858434ce2f"
let infoNode = workflow.nodes.find(n => n.id === 'f2dc081e-a702-40cd-86d4-5b858434ce2f');

if (!infoNode) {
    // Fallback: search by name "Info"
    infoNode = workflow.nodes.find(n => n.name === 'Info');
}

if (!infoNode) {
    console.error('CRITICAL: Node "Info" not found by ID or Name.');
    process.exit(1);
}

const correctInfoName = infoNode.name;
console.log(`Found Info node. Name: "${correctInfoName}"`);

// 2. Find the Agent Node
const agentNode = workflow.nodes.find(n => n.name.includes('Secretária'));
if (!agentNode) {
    console.error('Agent node not found.');
    process.exit(1);
}

// 3. Fix references in System Message
let systemMessage = agentNode.parameters.options.systemMessage;

// Replacements:
// $('Info1') -> $('Info') (if typo exists)
// $('Info') -> $('CorrectName') (if name changed)

let originalMessage = systemMessage;

// Regex to capture $('...') references and ensure they match correctInfoName
// But specifically we want to fix specific fields: Etiquetas and Nome
// Etiquetas do Usuário: {{ $('Info').item.json.etiquetas }}
// Nome: {{ $('Info').item.json.nome }}

systemMessage = systemMessage.replace(/\$\('Info\d*'\)/g, `$('${correctInfoName}')`);

if (systemMessage !== originalMessage) {
    console.log('Updated System Message references.');
    agentNode.parameters.options.systemMessage = systemMessage;

    // Write changes
    fs.writeFileSync(workflowPath, JSON.stringify(workflow, null, 2));
    console.log('Workflow file saved.');
} else {
    console.log('No changes needed in System Message.');

    // Force save anyway just to be sure we have a clean JSON structure
    // fs.writeFileSync(workflowPath, JSON.stringify(workflow, null, 2));
}

// Check if there are other references in the workflow to "Info1" and fix them
let fixedCount = 0;
const recursiveFix = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            if (obj[key].includes("$('Info1')")) {
                obj[key] = obj[key].replace(/\$\('Info1'\)/g, `$('${correctInfoName}')`);
                fixedCount++;
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            recursiveFix(obj[key]);
        }
    }
};

recursiveFix(workflow.nodes);
if (fixedCount > 0) {
    console.log(`Fixed ${fixedCount} other references to 'Info1'.`);
    fs.writeFileSync(workflowPath, JSON.stringify(workflow, null, 2));
}

