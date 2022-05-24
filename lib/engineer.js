const inquirer = require('inquirer');
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(employeeName, employeeId, employeeEmail,github){
        super(employeeName, employeeId, employeeEmail);
        this.github = github;
    }
    getEmployeeRole() {
        return 'Engineer';
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;