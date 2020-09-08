const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const outputarray = [];
const writeFileAsync = util.promisify(fs.writeFile);

function prompt () {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your manager's ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your favorite manager's email?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?"
    },
    {
      type: "list",
      name: "getRole",
      message: "Which type of team memeber would you like to add?", 
      choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
    },
  ])
  
  .then(answers => {
    manager = new Manager (answers.id, answers.name, answers.email, answers.officeNumber)
    outputarray.push (manager) 

    if (answers.getRole = "Engineer"){
      addengineer()    
    } 
    if (answers.getRole = "Intern"){
      addintern()    
    } 
    if (answers.getRole = "I dont want to add anymore team members"){
      render(outputarray)
    }
  });
}

prompt()
function addengineer () {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your engineers's ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your engineer's email?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineers's Github?"
    },
    {
      type: "list",
      name: "getRole",
      message: "Which type of team memeber would you like to add?", 
      choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
    }]
    .then(answers => {
      engineer = new Engineer (answers.id, answers.name, answers.email, answers.github)
      outputarray.push (engineer) 

      if (answers.getRole = "Engineer"){

        addengineer()
        
      } 
      if (answers.getRole = "I dont want to add anymore team members"){
        render(outputarray)
      }
    }
  ) 
)}
function addintern () {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your intern's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your intern's ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's email?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your intern's school?"
    },
    {
      type: "list",
      name: "getRole",
      message: "Which type of team memeber would you like to add?", 
      choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
    }]
    .then(answers => {
      intern = new Intern (answers.id, answers.name, answers.email, answers.school)
      outputarray.push (intern) 
      if (answers.getRole = "Engineer"){
        addengineer()
      } 
      if (answers.getRole = "Intern"){
        addintern()    
      } 
      if (answers.getRole = "I dont want to add anymore team members"){
        render(outputarray)
      }
    }
  ) 
)}