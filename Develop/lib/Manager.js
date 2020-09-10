const Employee = require ("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = parseInt(officeNumber)
        this.role = "Manager"
    }

    getRole(){
        return this.role;
    } 

    getOfficeNumber() {
        console.log(`#${this.officeNumber}`);
        return (this.officeNumber)
    }
} module.exports = Manager;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
