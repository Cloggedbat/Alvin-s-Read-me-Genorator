// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ### Author
  ${data.Yourname}    

  ## Table of Contents
  *[description](#description)
  *[Initallation instruction](#installation)
  *[User information](#usage)
  *[Licence](#licence)
  *[Contributors](#contributors)

  
  ## Description
  ${data.description}
  
  ## Licences used?
  ${data.contents}

  ## Installation instructions
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Usage
  ${data.user}

  ## Test instructions
  ${data.tests}

  ## Github
  ${data.github}


`;
}

module.exports = generateMarkdown;
