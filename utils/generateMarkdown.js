// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return'[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)]';
  }
  if (license === "Apache"){
    return'[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)]';
  }
  if (license === "BSD"){
    return'[![License: BSD](https://img.shields.io/badge/License-BSD-yellow.svg)]';
  }
  if (license === "Boost"){
    return'[![License: Boost](https://img.shields.io/badge/License-Boost-orange.svg)]';
  }
    //returns empty string if none or anything else
    return'';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  }
  if(license === 'Apache'){
    return '(https://opensource.org/licenses/Apache)';
  }
  if(license === 'BSD'){
    return '(https://opensource.org/licenses/BSD)';
  }
  if(license === 'Boost'){
    return '(https://opensource.org/licenses/Boost)';
  }
    //returns empty string if none or anything else
    return '';
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }
  
  return '## License';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#usage)
  4.[Contributors](#contributors)
  5.[Tests](#tests)
  6.[Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.github}
  ${data.email}

  ## License
  ${data.license}${renderLicenseLink(data.license)}

`;
}

export default generateMarkdown;
