const inquirer = require('inquirer');
class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }
    getEmployeeName() {
        
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the employee name?',
                }
            ]).then((response) => {
                console.log(response);
                this.employeeName = response.name;
            });
        


    }
    getEmployeeId() {
        
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the employee id?',
                }
            ]).then((response) => {
                console.log(response);
                this.employeeEmail = response.email;
            });

        
    }
    getEmployeeEmail() {
        
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the employee email address?',
                }
            ]).then((response) => {
                console.log(response);
                this.employeeEmail = response.email;
            });

        
    }
    getEmployeeRole() {
        // this.getEmployeeName()
        // .then (this.getEmployeeId())
        // .then(this.getEmployeeEmail());
        return 'Employee';
    }
}

module.exports = Employee;