var inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([{
            type: "input",
            message: "Whats is the title of your project? ",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project: ",
            name: "description"
        },
        {
            type: "input",
            message: "Enter instillation instructions: ",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter usage information: ",
            name: "usageInformation"
        },
        {
            type: "input",
            message: "Enter contribution guidelines: ",
            name: "guidelines"
        },
        {
            type: "input",
            message: "Enter test instructions: ",
            name: "testInstructions"
        },
        {
            type: "list",
            message: "Please select a license: ",
            name: "stack",
            choices: [
                "MIT",
                "Apache",
                "GPL",
                "Apache 2"
            ]
        },
        {
            type: "input",
            message: "Enter your GitHub username: ",
            name: "userGithub"
        },
        {
            type: "input",
            message: "Enter your email address: ",
            name: "userEmail"
        }
    ])
    .then(handlePromise)
    .catch(error => {
        if (error.isTtyError) {
            //prompt couldn't be rendered in this environment 
        } else {
            //something else is wrong
        }
    });

function handlePromise(response) {
    console.log(response);
    const template = `# ${response.title}
[![License](https://img.shields.io/badge/License-${response.stack}-blue.svg "License Badge")]

## Table of Contents
1. Project Description
2. Installation Instructions
3. Usage Information
4. Contribution Guidelines
5. Test Instructions
6. License
7. GitHub User
8. Contact Information
 
## Description of my Project:
${response.description}

## Installation Instructions:
${response.installation}

## Usage Information:
${response.usageInformation}

## Contribution Guidelines:
${response.guidelines}

## Test Instructions:
${response.testInstructions}

## License:
For more information about the license, please click on the link below:
[License](https://opensource.org/licenses/${response.stack})

## GitHub Username:
${response.userGithub}
GitHub page at the following Link: [GitHub](https://github.com/${response.userGithub})

## Email Address:
${response.userEmail}

`

    fs.writeFile(`${response.title.replace(/ /g, "")}.md`, template, function(error) {
        if (error)
            console.log(error);
    })
}