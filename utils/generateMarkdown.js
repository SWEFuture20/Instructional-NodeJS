// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation-Instructions](#installation instructions)
  *[Usage-Information](#usage information)
  *[Contribution-Guidelines](#contribution guidelines) 
  *[Test-Instructions](#test instructions)
  *[Licenses](#licenses)
  *[Questions](#questions) 

  ##Description
  ${data.Description}

  ##Installation Instructions
  ${data.Installation-Instructions}

  #Usage Information
  ${data.Usage-Information}

  #Contribution-Guidelines
  ${data.Contribution-Giudelines}

  #Test-Instructions
  ${data.Testing-Instructions}

  #Licenses
  ${data.Licenses}

  #Questions
  If you have additional questions, you can contact at one of the following places:

  GitHub-Username:[${data.GitHub-Username}](https://github.com/SWEFuture20)
  Email-Address:[${data.Email-Address}](https://github.com/SWEFuture20)
`;
}

module.exports = generateMarkdown;
