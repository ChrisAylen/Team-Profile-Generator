const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;  

    }
    getEmployeeRole() {
        return Manager;
    }

}
module.exports = Manager;