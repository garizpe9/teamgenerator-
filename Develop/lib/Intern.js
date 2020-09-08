const Employee = require ("./Employee")

class Intern extends Employee{
    constructor(id, name, email, school ){
        super(id, name, email)
        this.school = school
        this.role= "Intern"
    }

    getSchool() {
        console.log(`#${this.school}`);
    }
}module.exports = Intern;
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
