const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Office number can be set by class constructor", () => {
            const testValue = 100;
            const manager = new Manager("Fred", 1, "fred@test.com", testValue);
            expect(manager.officeNumber).toBe(testValue);
        });
        it("mmanager's office number is returned when calling getManagerOfficeNumber()", () => {
            const testValue = "12345678912";
            const manager = new Manager("Fred", "1", "fred@test.com", testValue);
            expect(manager.getManagerOfficeNumber()).toBe(testValue);
        });

        it('getRole() should return "Manager"', () => {
            const testValue = "Manager";
            const manager = new Manager("Fred", 1, "fred@test.com", testValue);
            expect(manager.getEmployeeRole()).toBe(testValue);
        });

    });
});

