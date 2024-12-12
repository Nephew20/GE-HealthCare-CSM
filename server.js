// Imports
const inquirer = require('inquirer');
const mysql = require('mysql2');

inquirer
  .prompt([
    {
        type: 'list',
        name: "option",
        message: "Hello, What would you like to do?",
        choices: ["View all departments", "View all employees", "Add a department", 
            "Add a role", "Add an employee", "Update an employee role"],    
    }
  ])
  .then((answers) => {
    const db = mysql.createConnection(
      {
        host: "localhost",
        user: "root",
        password: "12345",
        database: "ge_db"
      }
    )

    if (answers.option == "View all departments") {
      db.query(`SELECT * FROM departments;`)
    }
    
    console.log(answers.option)
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
    }
  });