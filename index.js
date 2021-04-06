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
        type: 'input',
        name: 'usage',
        message: 'Please input the usage information for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT','ISC','GNU GPLv3','Apache 2.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please input contribution guidelines for the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please input test instructions for the project.'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please input your gitHub username for the questions section.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email address for the questions section.'
    }
    ])
.then((data) => {
    const tableOfContents = 
    `[Installation](#Installation)
    [Usage](#Usage)
    [License](#License)
    [Contributing](#Contributing)
    [Tests](#Tests)
    [Questions](#Questions)`;
    const newText = 
    `
    #${data.title}
    
    ##Description
    ${data.description}

    ##Table of Contents
    ${tableOfContents}
    
    ##Installation
    ${data.installation}
    
    ##Usage
    ${data.usage}

    ##Contributing
    ${data.contributing}
    
    ##Tests
    ${data.tests}

    ##Questions
    For further questions, you may reach me at:
    - GitHub: ${data.githubUsername}
    - EMail: ${data.email}`;
    
    // console.log(newText);
    fs.writeFile('log.txt', newText, (err) => 
    err ? console.log(err) : console.log('Success!'));
})
