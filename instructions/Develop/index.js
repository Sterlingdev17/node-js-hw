 const api = require("./utils/api")
const fs = require("fs") ;
const inquirer = require("inquirer");
const generate = require("./utils/generate");


// Require all npm packages and files
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];


function init() {

   inquirer
    .prompt(questions).then(userResponse => {
     console.log(userResponse)
     // get the data from the API
     api.getUser(userResponse.github).then(( {data} ) => {
         console.log(data)

      fs.writeFile("readme1.md", generate(userResponse), function (err){
        if (err) {
          console.log(err);
        } 
          console.log("file created");
        
        
      })

     })
     });

  // Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it


}

init();

