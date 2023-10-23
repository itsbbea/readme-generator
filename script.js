const inquirer = require('inquirer');
const fs = require('fs');

function generateMarkdown (answers) {
    return `
# ${answers.title}

## Table of Contents
${answers.contents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
    `;
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of this project?',
            },
            {
                type: 'input',
                name: 'contents',
                message: 'Table of Contents',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Write the installation information for your project.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Write the usage information for your project.',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Write the license information for your project.',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Write the contributing information for your project.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Write the tests information for your project.',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Write the questions information for your project.',
            },
        ])
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            fs.writeFile('README.md', readmeContent, (err) => {
                if (err) {
                    console.log('An error occurred while writing the README.md file:', err);
                } else {
                    console.log('README.md has been successfully generated.');
                }
            });
        });
}

init();