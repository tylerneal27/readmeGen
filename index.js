// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

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
            "Apache License 2.0",
            'GNU General Public License v3.0',
            'Mozilla Public License 2.0'
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
        console.log(response)
    )
       
}

// Function call to initialize app
init();
