DROP DATABASE IF EXISTS ge_db;
CREATE DATABASE ge_db;

USE ge_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
)

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    departments_id INT NOT NULL,
    salary INT NOT NULL,
    FOREIGN KEY (departments_id)
    REFERENCES departments(id)
)

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    managers VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
)

