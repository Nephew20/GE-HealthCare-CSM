INSERT INTO departments(name) 
VALUES  ("Emergency Department"),
        ("Operating Room"),
        ("Radiology"),
        ("Cardiology"),
        ("General Patient Care");

INSERT INTO roles(job_title, departments_id, salary)
VALUES  ("Apprentice", 5, 45000),
        ("BMET Technician 1", 2, 55000),
        ("BMET Technician 2", 3, 70000),
        ("Field Service Engineer 1", 4, 65000),
        ("Field Service Engineer 2", 2, 80000);

INSERT INTO employees(first_name, last_name, roles_id, manager)
VALUES  ("Rodger", "Rabbit", 1, "Jessica Rabbit"),
        ("Daffy", "Duck", 2, "Bugs Bunny"),
        ("Wile E.", "Coyote", 3, "Road Runner"),
        ("Tweety", "Bird", 4, "Sylvestor"),
        ("Slowpoke", "Martinez", 5, "Speedy Gonzales");
         
