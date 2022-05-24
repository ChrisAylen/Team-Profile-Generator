const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("School can be set by class constructor", () => {
            const testValue = "TestSchool";
            const intern = new Intern("Fred", 1, "fred@test.com", testValue);
            expect(intern.school).toBe(testValue);
        });
        it("intern's school is returned when calling getSchool()", () => {
            const testValue = "TestSchool";
            const intern = new Intern("Fred", "1", "fred@test.com", testValue);
            expect(intern.getSchool()).toBe(testValue);
        });

        it('getRole() should return "Intern"', () => {
            const testValue = "Intern";
            const intern = new Intern("Fred", 1, "fred@test.com", testValue);
            expect(intern.getEmployeeRole()).toBe(testValue);
        });

    });
});