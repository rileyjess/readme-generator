// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-lightblue)`;
  } 
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-green)`;
  }
  if (license === 'GPL 3.0') {
    return `![License](https://img.shields.io/badge/License-GPL_3.0-orange)`;
  } 
  if (license === 'BSD 3') {
    return `![License](https://img.shields.io/badge/License-BSD_3-violet)`;
  }
  if (license === 'None') {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'MIT') {
    return 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  
  ## Questions
  Questions about this project? Contact the creator:
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;