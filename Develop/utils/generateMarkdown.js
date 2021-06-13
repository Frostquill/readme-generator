// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
  return `
![badge](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)
  `;
} else {
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `
    https://choosealicense.com/licenses/${license}
    `;
  } else {
    return "";
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {return `
# License 
the following link contains in depth details for the license assigned to this project:
[${renderLicenseLink(license)}](${renderLicenseLink(license)})
`;
} else {
  return "";
}
}

// TODO: Create a function to generate markdown for README
module.exports = readMeData => {
  console.log(readMeData);
  // const { ...data} = readMeData;
  
  // console.log(data.title);
  return `# ${readMeData.title}
  ${renderLicenseBadge(readMeData.license)}

  # Description

  ${readMeData.description}
  
  # Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  # Installation

  ${readMeData.installation}

  # Usage

  ${readMeData.usage}

  # Contributing

  ${readMeData.contribution}

  # Tests

  ${readMeData.tests}

  # Questions
  To view further projects view my github: [${readMeData.github}](https://www.github.com/${readMeData.github})

  if you have any further questions please contact me via email: (${readMeData.email})


  ${renderLicenseSection(readMeData.license)}


`;
}
