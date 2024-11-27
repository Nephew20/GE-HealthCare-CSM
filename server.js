const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'list',
        name: "options",
        message: "Hello, What would you like to do?",
        choices: ["View all departments", "View all employees", "Add a department", 
            "Add a role", "Add an employee", "Update an employee role"],    
    }
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
    }
  });