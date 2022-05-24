const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")
const Employee = require("./Employee")
const fs=require("fs")

function generateCardsArray(employees) {
    let cardsArray = [];
    for (let i = 0; i < employees.length; i++) {
        let card = "";
        if (employees[i].getEmployeeRole() === "Manager") {
            let test = employees[i].getManagerOfficeNumber();
            console.log(test);
            card = `<div class="card">
            <div class="card-header">
                <h2>Manager</h2>
                <p>Employee ID: ${employees[i].employeeId}</p>
                <p>Email: <a href="mailto:${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></p>
                <p>Office Number: ${employees[i].getManagerOfficeNumber()}</p>
            </div>
            </div>`;
        } else if (employees[i].getEmployeeRole() === "Engineer") {
            card = `<div class="card">
            <div class="card-header">
            <h2>Engineer</h2>
            <p>Employee ID: ${employees[i].employeeId}</p>
            <p>Email: <a href="mailto:${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></p>
            <p>GitHub: <a href="${employees[i].github}" target="_blank">engineer</a></p>
            </div>
            </div>`;
        } else {
            card = `            <div class="card">
            <div class="card-header">
                <h2>Intern</h2>
                <p>Employee ID: ${employees[i].employeeId}</p>
                <p>Email: <a href="${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></p>
                <p>School: ${employees[i].school}</p>
            </div>
            </div>`;
        }
        cardsArray.push(card);
    }
    const html=`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Company Team Page</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1>Company Team Page</h1>
        </header>
        <main>
            <div class="team">
                ${cardsArray}
            </div>
        </main>
    </body>
    
    </html>`
    fs.writeFile("./dist/team.html", html, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
    return cardsArray;
}


module.exports =  { generateCardsArray };