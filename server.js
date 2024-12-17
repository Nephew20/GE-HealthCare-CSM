// Imports
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const cTable = require('console.table')

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

inquirer
  .prompt([
    {
      type: 'list',
      name: "option",
      message: "Hello, What would you like to do?",
      choices: ["View all departments", "View all roles", "View all employees", "Add a department",
        "Add a role", "Add an employee", "Update an employee role"],
    }
  ])
  .then((answers) => {
    const db = mysql.createConnection(
      {
        host: "localhost",
        // Your Mysql User
        user: "root",
        // Your Mysql Password
        password: "12345",
        database: "ge_db"
      }
    )

    if (answers.option == "View all departments") {
      db.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
          console.log(err)
        }
        console.table(result)
        return
      })
    } else if (answers.option == "View all roles") {
      db.query(`SELECT roles.*, departments.name AS department_name FROM roles JOIN departments ON departments.id = roles.departments_id`, (err, result) => {
        if (err) {
          console.log(err)
        }
        console.table(result)
      })
      return
    } else if (answers.option == "View all employees") {
      db.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.name AS department_name, employees.manager AS employee_manager FROM employees JOIN roles ON roles.id = employees.roles_id JOIN departments ON departments.id = roles.departments_id`, (err, result) => {
        if (err) {
          console.log(err)
        }
        console.table(result)
      })
      return
    }

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    }
  });