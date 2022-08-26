// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want to make your title for your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'provide a description for your app?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'instruction to install your app?',
        name: 'installInstructions'
    },
    {
        type: 'input',
        message: 'List usages?',
        name: 'usageInformation'  
    },
    {
        type: 'input',
        message: 'Instruct users how to contribute?',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Instruct users how to test?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'select a license',
        name: 'license',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'Mozilla Public License 2.0',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'enter your GitHub username?',
        name: 'gitHubAcct'
    },
    {
        type: 'input',
        message: 'enter your Email?',
        name: 'email'
    }
   
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('gen/README.md', data, 
    (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const markdown = generateMarkdown(response)
        if (Object.values(response).some(v => v === ''))  {
            console.log('You missed some fields, please start over');
            return;
        }
        writeToFile(markdown)
})
       
}

// Function call to initialize app
init();
