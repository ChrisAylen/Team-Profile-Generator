const employee = require("./employee");

class Engineer extends employee(){
    constructor(github){
        this.github = github;
    }
    getEmployeeRole() {
        return Engineer;
    }
}

module.exports = Engineer;