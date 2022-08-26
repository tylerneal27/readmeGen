// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== 'None' ? `![license badge](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue)`
    : ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== 'None' ? `6. [License](#license)
7. `
   : '6. '
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None' ? `## License
  this project is covered under the ${license} 
  ` : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
1. [Description](#description)
2. [Install Instructions](#install-instructions)
3. [Usage Information](#usage-information)
4. [How To Contribute](#how-to-contribute)
5. [How to test](#how-to-test)
${renderLicenseLink(data.license)}[Questions](#questions)

## Description
${data.description}
## Install Instructions
${data.installInstructions}
## Usage Information
${data.usageInformation}
## How to contribute
${data.contributionGuidelines}
## How to test
${data.testInstructions}
${renderLicenseSection(data.license)}
## Questions
[github account](https://github.com/${data.gitHubAcct})

please reach out to [${data.email}](mailto:${data.email}) with questions
`;
}

module.exports = generateMarkdown;
