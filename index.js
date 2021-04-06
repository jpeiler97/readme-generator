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
    }])
.then((data) => {
    const newText = `#${data.title} \n\n##Description\n${data.description}`
    fs.writeFile('log.txt', newText, (err) => 
    err ? console.log(err) : console.log('Success!'));
})
