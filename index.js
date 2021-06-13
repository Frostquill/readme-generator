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
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
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
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license?',
            default: true
        },
        {
            type: 'list',
            name:'license',
            message: 'Select license',
            choices: ['mit', 'agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'bsl-1.0', 'unlicense'],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }

    ]);
}


// TODO: Create a function to write README file
 const writeToFile = fileName => {
    //  console.log(generateMarkdown(data))
    
     fs.writeFile('./dist/readme.md' , fileName, err => {
         if(err) {
             return console.log(err);
             
         }
            console.log("File Created!");
            
         });
        //  console.log(data);
   
    }
    
 

// TODO: Create a function to initialize app
 function init() {
     questions()
     .then(readMeArr => {
        //  console.log(readMeArr);
         return generateMarkdown(readMeArr);
     })
     .then(templateData => {
        // console.log(templateInfo);
         return writeToFile(templateData);
     })
     .catch(err => {
         console.log(err);
     })
     
 }

// Function call to initialize app
init();
