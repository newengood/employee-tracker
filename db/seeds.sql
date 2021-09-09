INSERT INTO department (name)
VALUES 
("Accounting"),
("Finance"),
("Sales"),
("Engineering");

INSERT INTO 'role' (title, salary, department_id)
VALUES 
("Accountant", 100000, 1),
("Financial Advisor", 150000, 2),
("Sales Advisor", 3, 200000),
("Engineer", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Johnson", 1, NULL),
("Tom", "Titan", 2, NULL),
("Luke", "Long", 3, NULL),
("Wendell", "Win", 4, NULL);

