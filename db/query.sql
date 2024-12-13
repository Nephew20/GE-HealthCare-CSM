SELECT roles.*, departments.name AS department_name
FROM roles
JOIN departments ON departments.id = roles.departments_id;