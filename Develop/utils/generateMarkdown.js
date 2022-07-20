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
    licenseLink = `![Alt = licenseLink](https://www.apache.org/licenses/)`
  }
  else if(license === 'GNU OS')
  {
    licenseLink = `![Alt = licenseLink](https://www.gnu.org/graphics/heckert_gnu.transp.small.png)`
  }
  else if(license === 'Rust')
  {
    licenseLink = `![Alt = licenseLink](https://rust-lang.github.io/api-guidelines/necessities.html#crate-and-its-dependencies-have-a-permissive-license-c-permissive)`
  }
  else if(license === 'MIT')
  {
    licenseLink = `![Alt = licenseLink](https://choosealicense.com/licenses/mit/)`
  }
  else if(license === 'GNU Public')
  {
    licenseLink = `![Alt = licenseLink](https://choosealicense.com/licenses/gpl-3.0/)`
  }
  else
  {
    licenseLink = ``;
  }

  return licenseLink

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let results;

  if(license === 'Apache' || 'GNU OS' || 'Rust' || 'MIT' || 'GNU Public')
  {
    results = renderLicenseBadge(license), renderLicenseLink(license) 
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

## Description

${ans.projDescipt}

### What problems does this project solve?

${ans.probSolve}

### What did we learn along the way?

${ans.lifeLesson}

### What makes this project stand out?

${ans.standOut}

## How to Contribute

${ans.helpOut}

## Screenshots

![Alt = Screenshot]${ans.imgShot}

## License

${renderLicenseSection(ans.licenseType)}

`;
}

module.exports = generateMarkdown;
