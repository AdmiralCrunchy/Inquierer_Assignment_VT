// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";
  if(license === 'Apache')
  {
    badge = `![Alt = badge](https://img.shields.io/badge/license-Apache-blue)`
  }
  else if(license === 'GNU OS')
  {
    badge = `![Alt = badge](https://img.shields.io/badge/license-GPU_OS-green)`
  }
  else if(license === 'Rust')
  {
    badge = `![Alt = badge](https://img.shields.io/badge/license-Rust-API)`
  }
  else if(license === 'MIT')
  {
    badge = `![Alt = badge](https://img.shields.io/badge/license-MIT-blueviolet)`
  }
  else if(license === 'GNU Public')
  {
    badge = `![Alt = badge](https://img.shields.io/badge/license-GNU-Public)`
  }
  else
  {
    badge = ``;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if(license === 'Apache')
  {
    licenseLink = `https://www.apache.org/licenses/`
  }
  else if(license === 'GNU OS')
  {
    licenseLink = `https://www.gnu.org/graphics/heckert_gnu.transp.small.png`
  }
  else if(license === 'Rust')
  {
    licenseLink = `https://rust-lang.github.io/api-guidelines/necessities.html#crate-and-its-dependencies-have-a-permissive-license-c-permissive`
  }
  else if(license === 'MIT')
  {
    licenseLink = `https://choosealicense.com/licenses/mit/`
  }
  else if(license === 'GNU Public')
  {
    licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`
  }
  else
  {
    licenseLink = ``;
  }

  return `<a href="${licenseLink}"> License Link</a>`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let results;

  if(license === 'Apache' || 'GNU OS' || 'Rust' || 'MIT' || 'GNU Public')
  {
    results = renderLicenseBadge(license) + " " + renderLicenseLink(license) 
  }
  else
  [
    results = ''
  ]
  return results
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(ans) {
  return `# ${ans.titleInput}

## Table of Contents

[Description](#description) <br>

[Instructions](#instruction) <br>

[Contribute](#contribute) <br> 

[Screenshot](#screenshot) <br> 

[License](#license) <br>


<a name="description"> </a>

## Description


${ans.projDescript}

### What problems does this project solve?

${ans.probSolve}

### What did we learn along the way?

${ans.lifeLesson}

### What makes this project stand out?

${ans.standOut}

<a name="instruction"> </a>

## Instructions

The following is the download instructions needed to get this application running.

### Usage Information

The command that you will need to use to get this application running is: ${ans.appRun}

### Test Instructions

Testing is done with the following command: ${ans.test}

<a name="#contribute"> </a>

## How to Contribute

${ans.helpOut}

Here is a link to my GitHub in case you would like to contribute <a href="${ans.gitHub}"> LINK HERE <a>

<a name="screenshot"> </a>

## Screenshots

<img src = "${ans.imgShot}" alt = "Screenshot">

<a name="license"> </a>

## License

${renderLicenseSection(ans.licenseType)}

`;
}

module.exports = generateMarkdown;
