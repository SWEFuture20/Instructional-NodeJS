// function to generate markdown for README
// On Lines 7-14, I am creating the structure for the README in the following order. 
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ## Table of Contents
  *[Description]
  *[Installation]
  *[Usage]
  *[Contributing]
  *[Tests]
  *[Licenses]
  *[Questions] 

  ##Description
  ${data.Description}
  console.log(${data.Description})
  ##Installation Instructions
  ${data.Installation}

  ##Usage Information
  ${data.Usage}

  ##Contribution-Guidelines
  ${data.Contribution}

  ##Test-Instructions
  ${data.Test}

  ##Licenses
  ${data.Licenses}

  ##Questions
  If you have additional questions, you can contact me at one of the following places:

  GitHub-Username:[${data.GitHub}](https://github.com/SWEFuture20)
  Email-Address:[${data.Email}](https://github.com/SWEFuture20)
  
`;
}
module.exports = generateMarkdown;
