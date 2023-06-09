// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `https://img.shields.io/badge/license-${license}-green`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return `./LICENSE`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License\n![license](${renderLicenseBadge(license)}) Please refer to the [LICENSE](${renderLicenseLink(license)}) in the repo.`;
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  let readmeText = `# ${data.title}
## Description\n${data.description}
${data.includeFeatures === 'Yes' ? `## Features\n${formatList(data.features)}`:``}
${data.includeDeployed === 'Yes' ? `## Deployed Project\nThe project is deployed at: [${data.deployed}](${data.deployed})`:``}
${data.includeInstall === 'Yes' ? `## Installation\n${formatList(data.install)}`:``}
## Usage\n${data.usage}
${data.includeCredits === 'Yes' ? `## Credits\n${formatList(data.credits)}`:``}
${data.includeChallenges === 'Yes' ? `## Challenges\n${formatList(data.challenges)}`:``}
## Future Development\n${formatList(data.future)}
${data.includeContribute === 'Yes' ? `## How to Contribute\n${data.contribute}`: ``}
${data.includeTests === 'Yes' ? `## Tests\n${formatList(data.tests)}`:``}
${renderLicenseSection(data.license)}
`;
  return readmeText;
}

function formatList(strList) {
  let arrList = strList.split(',');
  let result = "";
  arrList.forEach(element => {
      let current = element.trim();
      result += `- ${current}\n`;
  });
  return result;
}

module.exports = generateMarkdown;
