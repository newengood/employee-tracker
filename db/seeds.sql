-- Insert data into tables
INSERT INTO department (name)
VALUES 
("Accounting"),
("Finance"),
("Sales"),
("Engineering");

INSERT INTO `role` (title, salary, department_id)
VALUES 
("Accountant", 100000, 1),
("Junior Accountant", 75000, 1),
("Financial Advisor", 150000, 2),
("Junior Financial Advisor", 10000, 2),
("Sales Advisor", 20000, 3),
("Junior Sales Advisor", 150000, 3),
("Engineer", 250000, 4),
("Junior Engineer", 20000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Johnson", 1, NULL),
("Mike", "Mikerson", 2, 1),
("Tom", "Titan", 3, NULL),
("Linda", "Lantern", 4, 3),
("Luke", "Long", 5, NULL),
("Ben", "Blowers", 6, 5),
("Wendell", "Win", 7, NULL),
("Peter", "Pike", 8, 7);

