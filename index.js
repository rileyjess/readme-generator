// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
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
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What do users need to know about contributing to this repository?',
        name: 'contributing',
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

// A function that writes README file
function writeToFile(data) {

    const fileName = `./generated-README/README.md`;

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README has been created!'))
};

// A function to initialize app
function init() {
    return inquirer
        .prompt(questions)
};

// Function call to initialize app
init()
    .then((responses) => {
        return generateMarkdown(responses);
    })
    .then((data) => {
        return writeToFile(data);
    })
    .catch((err) => {
        err ? console.error(err) : console.log('Success!')
    })