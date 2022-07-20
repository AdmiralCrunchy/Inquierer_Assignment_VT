// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your project?",
        name:"titleInput",
    },
    {
        type:"input",
        message:"Give a short description about your project, this should include why you built this project?",
        name:"projDescript"
    },
    {
        type:"input",
        message:"What problem does it solve?",
        name:"probSolve",
    },
    {
        type:"input",
        message:"What did you learn along the way?",
        name:"lifeLesson",
        
    },
    {
        type:"input",
        message:"Finally, what makes your project stand out?",
        name:"standOut",
    },
    {
        type:"input",
        message:"Input the url of screenshot.",
        name:"imgShot",
    },
    {
        type:"input",
        message:"How can people contribute to the project?",
        name:"helpOut",
    },
    {
        type:"list",
        message:"Which of these licenses would you like to apply to your project?",
        name:"licenseType",
        choices:["Apache","GNU OS", "Rust", "MIT", "GNU Public", "NONE"],
    }

]).then(ans=>{
    const markdown = generateMarkdown(ans)
    console.log(markdown)
    fs.writeFile(`./${ans.titleInput}.md`, markdown ,(err, data)=>{
        if(err){
            throw err
        }
        console.log('working!')
    })
})

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
