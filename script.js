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

inquirer
.prompt([
{  type: "input",
    name: "title",
    message: "What is the title of the this project?",
},
{
    type: 'input',
    name: 'User Story',
    message: 'Why did you build this project',
},
{
type: 'input',
name: 'Problem Solved',
message: 'What problem does it solve?',
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
name: 'contributions',
message: 'Write the contributing information for your project.',
},
{
type: 'input',
name: 'Screenshots',
message: 'Add a screenshot of your project',
},
{
type: 'input',
name: 'questions',
message: 'Write the questions information for your project.',
},
]);


