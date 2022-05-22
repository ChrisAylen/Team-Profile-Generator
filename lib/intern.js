const employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool(){

    }
    getEmployeeRole() {
        return Intern;
    }
}
moduls.exports = Intern;