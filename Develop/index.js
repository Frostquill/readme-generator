// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
// const { rejects } = require("assert");
// console.log(fs);

// TODO: Create an array of questions for user input
const questions = readMe => {
    if(!readMe) {
        readMe = [];
    }
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message:'what are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'provide usage information for your project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'please provide your contributing standards for your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'provide test information'
        }


        
    ]).then(answers => {
        readMe.push(answers);
        console.log(readMe);

    })
    
   
}

questions();

// TODO: Create a function to write README file
 const writeToFile = (fileName, data) =>{
     return new Promise((resolve, reject) => {
     fs.writeFile(`${fileName}.md`, data,  err => {
         ``
         if(err) {
             reject(err);
             return;
         }
         resolve ({
             ok:true,
             message: 'File Created!'
            });
         });
     });
 }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
