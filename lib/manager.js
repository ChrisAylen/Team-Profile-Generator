const Employee = require("./Employee");
const inquirer = require('inquirer');
class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail,officeNumber) {
        super(employeeName, employeeId, employeeEmail);
        this.officeNumber = officeNumber;
    }
    getManagerOfficeNumber() {
        return this.getManagerOfficeNumber();
    }
    getEmployeeRole() {
        return "Manager";
    }
}
module.exports = Manager;