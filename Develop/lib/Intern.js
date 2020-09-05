const Employee = require ("./Employee")

class Intern{
    constructor(school){
        this.school = school
    }

    getSchool() {
        console.log(`#${this.school}`);
    }
}module.exports = Intern;
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
