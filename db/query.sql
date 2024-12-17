SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.name AS department_name, employees.manager AS employee_manager
FROM employees
JOIN roles ON roles.id = employees.roles_id
JOIN departments ON departments.id = roles.departments_id;