const inquirer = require('inquirer');
class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }
    getEmployeeName() {

        return this.employeeName;
    }
    getEmployeeId() {

        return this.employeeId;
    }
    getEmployeeEmail() {

        return this.employeeEmail
    }
    getEmployeeRole() {

        return 'Employee';
    }
}

module.exports = Employee;