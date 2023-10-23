const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./assets/generateMarkdown')

inquirer
.prompt([
{
    type: "input",
    message: "What is the title of the this project?",
    name: "title"
},

])