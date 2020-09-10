const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const outputarray = [];
const writeFileAsync = util.promisify(fs.writeFile);


function addmanager() {
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
      name: "getOfficeNumber",
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
    const manager = new Manager(answers.id, answers.name, answers.email, answers.getOfficeNumber)
    outputarray.push(manager)
    if (answers.getRole === "Engineer") {
      addengineer()
    }
    else if (answers.getRole === "Intern") {
      addintern()
    }
    else if (answers.getRole === "I dont want to add anymore team members") {
      //console.log (outputarray)
     // console.log(render())
      //console.log (render(outputarray))
      render(outputarray)

      

    }
  })
  .catch(error => {
    console.log(error);
  });
}

function addengineer() {
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
      name: "getGithub",
      message: "What is your engineers's Github?"
    },
    {
      type: "list",
      name: "getRole",
      message: "Which type of team memeber would you like to add?",
      choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
    },
  ])

  .then(answers => {
    const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github)
    outputarray.push(engineer)

    if (answers.getRole === "Engineer") {
      addengineer()
    }

    else if (answers.getRole === "Intern") {
      addintern()
    }
    else if (answers.getRole === "I dont want to add anymore team members") {
      render(outputarray)
      
      
    }
  })
  .catch(error => {
    console.log(error)

  })
};

function addintern() {
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
      name: "getSchool",
      message: "What is your intern's school?"
    },
    {
      type: "list",
      name: "getRole",
      message: "Which type of team memeber would you like to add?",
      choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
    }
  ])
  .then(answers => {
   const intern = new Intern(answers.id, answers.name, answers.email, answers.school)
    outputarray.push(intern)
    if (answers.getRole === "Engineer") {
      addengineer()
    }
    else if (answers.getRole === "Intern") {
      addintern()
    }
    else if (answers.getRole === "I dont want to add anymore team members") {
      render(outputarray)
      
      
    }
  })
  .catch(error => {
    console.log(error);
  })

}


addmanager()