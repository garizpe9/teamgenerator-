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
    
    if (answers.getRole = "I dont want to add anymore team members"){
      render(outputarray)
    }





  })
  
  ;
}

function addengineer () {
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your manager's name?"
  },
  {
    type: "input",
    name: "id",
    message: "Whereis your manager's ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your favorite manager's email?"
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
    
  }
  
  
}



])




  else if(answers.getRole = "Intern") {
    return inquirer.prompt +=([
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
          },
    ])
}
  else if(answers.getRole = "I dont want to add anymore team members"){

  return  
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```