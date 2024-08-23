// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How should dependencies be installed? (e.g. npm i)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What should the user know about using this repository?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What license should this project have?',
        options: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What do users need to know about contributing to this repository?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'How can the user run tests? (e.g. npm test)',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();