// array of questions for user
const questions = [ 
    {
        type: "input",
        message: "What is the titile of your project?",
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
        name: "Installation Instruction"
    },
    {
        type: "input",
        message: "What is the purpose for using this ReadMe?",
        name: "Usage Information"
    },
    {
        type: "input",
        message: "What are the guidelines contributions?",
        name: "Contribution Guidelines"
    },
    {
        type: "input",
        message: "How are you testing the instructions in this file?",
        name: "Test Instructions"
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
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
