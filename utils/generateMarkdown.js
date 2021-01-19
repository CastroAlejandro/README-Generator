// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
const renderLicenseBadge = license => {
	if (license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
	if (license === "APACHE 2.0") return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
	if (license === "GPL 3.0") return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
	if (license === "BSD 3") return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
	if (license === "NONE") return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
	if (license === "MIT") return "(https://opensource.org/licenses/MIT)";
	if (license === "APACHE 2.0") return "(https://opensource.org/licenses/Apache-2.0)";
	if (license === "GPL 3.0") return "(https://www.gnu.org/licenses/gpl-3.0)";
	if (license === "BSD 3") return "https://opensource.org/licenses/BSD-3-Clause)";
	if (license === "NONE") return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
	if (license === "NONE") {
		return "";
	}
	else {
	return `
	## License
	${license}
	`
	}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

	const renderShield = renderLicenseBadge(data.license);
	const renderLink = renderLicenseLink(data.license);
	const renderSection = renderLicenseSection(data.license);
	return `# ${data.title}
	
	${renderShield}${renderLink}
	​
## Description
	​
	${data.description}

​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​    ${data.installation}
​
## Usage
​
${data.usage}
​​
${renderSection}
  
## Contributing
​
${data.contributing}
​
## Tests
​
${data.test}

​
## Questions
​
If you have any questions, comments, or concerns please feel free to contact me at castroal96@gmail.com 

`
}

module.exports = generateMarkdown;
