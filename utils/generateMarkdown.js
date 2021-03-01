// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation Instructions](#installation instructions)
  *[Usage Information](#usage information)
  *[Contribution Guidleines](#contribution guidelines) 
  *[Test Instructions](#test instructions)
  *[](#)
  *[Questions](#questions) 


`;
}

module.exports = generateMarkdown;
