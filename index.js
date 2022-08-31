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
        type: "input",
        message:"What is the command line that will get this application running?",
        name:"appRun",
    },
    {
        type: "input",
        message:"Are there any command lines that you can use to test the application? If not then type NONE.",
        name:"test",
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
        type: "input",
        message:"What is your GitHub account url?",
        name: 'gitHub',
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

function init() {}

// Function call to initialize app
init();
