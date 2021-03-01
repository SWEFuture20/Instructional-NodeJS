// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation-Instructions](#installation instructions)
  *[Usage Information](#usage information)
  *[Contribution Guidleines](#contribution guidelines) 
  *[Test Instructions](#test instructions)
  *[Licenses](#licenses)
  *[Questions](#questions) 

  ##Description
  ${data.Description}

  ##Installation Instructions
  ${data.Installation-Instructions}

  
`;
}

module.exports = generateMarkdown;
