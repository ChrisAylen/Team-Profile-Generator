const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Employee can be instantiated as an object', () => {
            const testValue = 'Employee';
            const employee = new Employee('Fred', 1, "fred@test.com");
            expect(typeof employee).toBe('object');

        });
        it('Employee can be instantiated with a name using the constructor', () => {
            const testValue = 'Fred';
            const employee = new Employee(testValue);
            expect(employee.employeeName).toBe(testValue);
        });
        it('Employee can be instantiated with a id using the constructor', () => {
            const testValue = 1;
            const employee = new Employee("Fred",testValue,"test@test.com");
            expect(employee.employeeId).toBe(testValue);
        });
        it('Employee can be instantiated with an email using the constructor', () => {
            const testValue = 'test@test.com';
            const employee = new Employee("Fred",1,testValue);
            expect(employee.employeeEmail).toBe(testValue);
        });
        it('Get employee name via method getEMployeeName', () => {
            const testValue = 'test@test.com';
            const employee = new Employee(testValue,1,"test@test.com");
            expect(employee.getEmployeeName()).toBe(testValue);
        });
        it('Get employee id via method getEmployeeName', () => {
            const testValue = 1;
            const employee = new Employee("Fred",testValue,"test@test.com");
            expect(employee.getEmployeeId()).toBe(testValue);
        });
        it('Get employee email via method getEmployeeEmail', () => {
            const testValue = 'test@test.com';
            const employee = new Employee("Fred",1,testValue);
            expect(employee.getEmployeeEmail()).toBe(testValue);
        });
        
        //Get the employee's name using getEmployeeName()
        //Get the employee's id using getEmployeeId()
        //Get the employee's email using getEmployeeEmail()
    });
});







