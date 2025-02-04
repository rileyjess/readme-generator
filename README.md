## README Generator

[![Static Badge](https://img.shields.io/badge/License-MIT-lightblue)](https://choosealicense.com/licenses/mit/)

## Description
An application that uses Node.js and the Inquirer package to create professional README files. When index node.js is run in the terminal, the user will be prompted for information about the project, and that information will be used to generate the README, which will appear in the generated-README folder. 

## Table of Contents
  * [Acceptance Criteria](#acceptance_criteria)
  * [Installation](#installation)
  * [Walkthrough Video](#walkthrough_video)
  * [License](#license)
  * [Credits](#credits)

## Acceptance Criteria
~~~
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
~~~

## Installation
To install necessary dependencies, run the following command:
~~~
npm i inquirer
~~~

## Walkthrough Video 
Watch [this walkthrough](https://youtu.be/ZCQ-wbE6wOs?feature=shared) to see how the README generator works. 

## License
This project is licensed under the MIT license.

## Credits
Starter code in the index.js, package.json, and generateMarkdown.js files was copied from: https://github.com/coding-boot-camp/potential-enigma