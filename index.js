const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
let menuSlection = '';
let engineers = [];
let interns = [];
let managers = [];
//All roles are employees
//We will always want to ask employee questions regardless of role type (name, id, email)

function askEmployeeQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employee email address?',
        }
    ]).then((response) => {
        console.log(response);
        employee = new Employee(response.name, response.id, response.email);
        return employee;
    });
}


function askManagerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number?',
        }
    ]);
}

function askEngineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineers GitHub username?',
        }
    ]);
}

function askInternQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school?',
        }
    ]);
}

function consloleLogTeam() {
    console.log(managers);
    console.log(engineers);
    console.log(interns);
}

function displayStartMenu() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role you wish to add?',
            choices: ['Engineer', 'Intern', 'Manager', 'Build Team', 'Exit']
        }
    ]).then((response) => {
        menuSlection = response.role;
        if (menuSlection != 'Exit') {

            askEmployeeQuestions().then((response) => {
                switch (menuSlection) {
                    case 'Engineer':
                        askEngineerQuestions().then((response) => {
                            console.log(response);
                            const engineer = new Engineer(employee.employeeName, employee.employeeId, employee.employeeEmail, response.github);
                            //console.log(engineer);
                            engineers.push(engineer);
                            consloleLogTeam();
                            displayStartMenu()
                            return engineer;
                        });
                        break;
                    case 'Intern':
                        askInternQuestions().then((response) => {
                            console.log(response);
                            const intern = new Intern(employee.employeeName, employee.employeeId, employee.employeeEmail, response.school);
                            interns.push(intern);
                            //var test = intern.getEmployeeRole();
                            consloleLogTeam();
                            displayStartMenu()
                            return intern;
                        });
                        break;
                    case 'Manager':
                        askManagerQuestions().then((response) => {
                            console.log(response);
                            const manager = new Manager(employee.employeeName, employee.employeeId, employee.employeeEmail, response.officeNumber);
                            managers.push(manager);
                            consloleLogTeam();
                            displayStartMenu()
                            return manager;
                        });
                        break;
                    case 'Build Team':
                        promptUser().then((response) => {
                            console.log(response);
                        });
                        break;
                }

            });
        }
        else {
            process.exit();
        }
    });

}

displayStartMenu();
