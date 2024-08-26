// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-lightblue)](${renderLicenseLink(license)})`;
  } 
  if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-green)](${renderLicenseLink(license)})`;
  }
  if (license === 'GPL 3.0') {
    return `[![License](https://img.shields.io/badge/License-GPL_3.0-orange)](${renderLicenseLink(license)})`;
  } 
  if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3-violet)](${renderLicenseLink(license)})`;
  }
  if (license === 'None') {
    return ``;
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`;
  } 
  if (license === 'Apache 2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  }
  if (license === 'GPL 3.0') {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  } 
  if (license === 'BSD 3') {
    return `https://opensource.org/license/bsd-3-clause`;
  }
  if (license === 'None') {
    return ``;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'None') {
    return ``
  } else {
    return `## License
  This project is licensed under the ${license} license.`
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}

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
  
  ${renderLicenseSection(data.license)}
  
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