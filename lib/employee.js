class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }
    getEmployeeName() {

    }
    getEmployeeId() {

    }
    getEmployeeEmail() {

    }
    getEmployeeRole() {
        return Employee;
    }
}

module.exports = Employee;