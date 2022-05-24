const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Github name can be set by class constructor", () => {
            const testValue = 100;
            const engineer = new Engineer("Fred", 1, "fred@test.com", testValue);
            expect(engineer.github).toBe(testValue);
        });
        it("Engineer's GitHub is returned when calling getGitHub()", () => {
            const testValue = "TestGitHub";
            const engineer = new Engineer("Fred", "1", "fred@test.com", testValue);
            expect(engineer.getGitHub()).toBe(testValue);
        });

        it('getRole() should return "Engineer"', () => {
            const testValue = "Engineer";
            const engineer = new Engineer("Fred", 1, "fred@test.com", testValue);
            expect(engineer.getEmployeeRole()).toBe(testValue);
        });

    });
});