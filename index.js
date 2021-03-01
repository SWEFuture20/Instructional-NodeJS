const { writeFile } = require("fs")
const pkg = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { prompt } = pkg;

// array of questions for user
const questions = [ 
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type:"input",
        message: "Give a description of this Project",
        name: "Description"
    },
    {
        type: "input",
        message: "Give some instructions on installing this ReadMe",
        name: "Installation"
    },
    {
        type: "input",
        message: "What is the purpose for using this ReadMe?",
        name: "Usage"
    },
    {
        type: "input",
        message: "What are the guidelines contributions?",
        name: "Contribution"
    },
    {
        type: "input",
        message: "How are you testing the instructions in this file?",
        name: "Test"
    },
    {
        type: "list",
        message: "You have to Select a License from One of the Following",
        name: "Licenses",
        choices: [
            "Modified-BSD",
            "Apache-2.0-only",
            "CC0-1.0-only",
            "Expat",
            "GNU-GPL-3.0-or-later"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub name?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    },
    // {
    //     type: "input",
    //     message: "Do you have a link to a video for this project?",
    //     name: "Video"
    // }
];


// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response)
    }).catch((err) =>
console.log(err))
    };


// function call to initialize program
init();
