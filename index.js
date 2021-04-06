/*
1. Title
2. Description
3. Table of Contents
4. Installation
5. Usage
6. License
7. Contributing
8. Tests
9. Questions
*/

const inquirer = require('inquirer');
const fs = require('fs');


console.log('PROFESSIONAL README GENERATOR');
console.log('*****************************');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your README\'s title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please input the installation instructions for your project.'
    },
    {
        type: 'Usage',
        name: 'usage',
        message: 'Please input the usage information for your project.'
    }
    ])
.then((data) => {
    const tableOfContents = '[Installation](#Installation)\n[Usage](#Usage)\n[License](#License)\n[Contributing](#Contributing)\n[Tests](#Tests)\n[Questions](#Questions)';
    const newText = `#${data.title}\n\n##Description\n${data.description}\n\n##Table of Contents\n${tableOfContents}\n`;
    
    console.log(newText);
    // fs.writeFile('log.txt', newText, (err) => 
    // err ? console.log(err) : console.log('Success!'));
})
