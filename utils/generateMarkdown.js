// function to generate markdown for README
// On Lines 7-14, I am creating the structure for the README in the following order. 
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing) 
  *[Tests](#tests)
  *[Licenses](#licenses)
  *[Questions](#questions) 

  ##Description
  ${data.Description}

  ##Installation Instructions
  ${data.Installation-Instruction}

  ##Usage Information
  ${data.Usage-Information}

  ##Contribution-Guidelines
  ${data.Contribution-Guidelines}

  ##Test-Instructions
  ${data.Test-Instructions}

  ##Licenses
  ${data.Licenses}

  ##Questions
  If you have additional questions, you can contact me at one of the following places:

  GitHub-Username:[${data.GitHub-Username}](https://github.com/SWEFuture20)
  Email-Address:[${data.Email-Address}](https://github.com/SWEFuture20)
  Video:[${data.Video}]()
`;
}

module.exports = generateMarkdown;
