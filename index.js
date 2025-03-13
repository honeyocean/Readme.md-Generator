// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'What is the title for your project?'},
    {type: 'input', name: 'description', message: 'Enter a description for your project'},
    {type: 'input', name: 'installation', message: 'Decripbe installation process'},
    {type: 'input', name: 'usage', message: 'Describe the usage of your project'},
    {type: 'list', name: 'license', message: 'Select one of the following licenses:', choices: ["MIT", "Apache", "BSD", "Boost", "None"]},
    {type: 'input', name: 'contributors', message: 'Enter contributors for your project'},
    {type: 'input', name: 'tests', message: 'Enter any test done for the project'},
    {type: 'input', name: 'github', message: 'Enter GitHub username'},
    {type: 'input', name: 'email', message: 'Enter email address'}
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>{
        if(err){
            console.log("Error has occured while creating your README file", err);
        }
        else{
            console.log("README file was created successfully");
        }
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log("Composing");
        writeToFile("professionalREADME.md", generateMarkdown(answers));
    }
    )
    .catch(error =>{
        console.log("Error: ", error);
    }
    )
}

// Function call to initialize app
init();
