const inquirer = require('inquirer');
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, school) {
        super(employeeName, employeeId, employeeEmail);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getEmployeeRole() {
        return "Intern";
    }
}
module.exports = Intern;