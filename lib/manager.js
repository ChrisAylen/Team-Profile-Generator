const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail,officeNumber) {
        super(employeeName, employeeId, employeeEmail);
        this.officeNumber = officeNumber;
    }
    getManagerOfficeNumber() {
        return this.officeNumber;
    }
    getEmployeeRole() {
        return "Manager";
    }
}
module.exports = Manager;