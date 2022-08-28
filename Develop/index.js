// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the application?",
        name: "appTitle",
    },
    {
        type: "input",
        message:  "Please enter a description of the project.",
        name: "projectDesc",
    },
    {
        type: "input",
        message: "What is needed for installation?",
        name: "installInstruct",
    },
    {
        type: "input",
        message: "What is the use of this project?",
        name:  "usageInput"
    },
    {
        type: "input",
        message: "How does someone execute/start the program?",
        name: "howToStart",
    },
    {
        type: "input",
        message: "Who are the authors on this project?",
        name: "typedAuthors"
    },
    {
        type: "list",
        message: "Which license do you want to use?",
        choices: ["MIT", "Apache License 2.0", "Unlicense", "BSD 2-Clause 'Simplified' License", "None" ],
        name: "licenseType",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        var markDown = generateMarkdown(responses);
        console.log(markDown);
        writeToFile("README.md", markDown);
    });
}

// Function call to initialize app
init();
