// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
// const { rejects } = require("assert");
// console.log(fs);
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
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
    ]);
}


// TODO: Create a function to write README file
 const writeToFile = fileName => {
     console.log(fileName);
    return new Promise((resolve, reject) => { 
     fs.writeFile(`./dist/${fileName.title}.md`, fileName,  err => {
         if(err) {
             reject(err);
             return;
         }
         resolve ({
             ok:true,
             message: 'File Created!'
            });
         });
        //  console.log(data);
     })
    }
    
 

// TODO: Create a function to initialize app
 function init() {
     questions()
     .then(readMeArr => {
        //  console.log(readMeArr);
         return generateMarkdown(readMeArr);
     })
     .then(templateData => {
        
         return writeToFile(templateData);
     })
     .catch(err => {
         console.log(err);
     })
     
 }

// Function call to initialize app
init();
