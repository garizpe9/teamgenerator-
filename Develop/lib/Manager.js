const Employee = require ("./Employee")

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super (id, name, email);
        this.officeNumber = officeNumber
        this.role = "Manager"
    }
}
module.exports = Manager;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
