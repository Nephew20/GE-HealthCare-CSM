SELECT employees.id, employees.first_name, employees.last_name, roles.job_title FROM employees 
JOIN roles ON roles.id = employees.roles_id