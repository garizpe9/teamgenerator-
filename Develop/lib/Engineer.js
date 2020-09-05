const Employee = require ("./Employee")

class Engineer{
    constructor(github){
        this.github = github
    }

    getGithub() {
        console.log(`#${this.github}`);
    }
}

module.exports = Engineer;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
