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
    });
});







