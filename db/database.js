// import libraries
const mysql = require("mysql2/promise");
require('dotenv').config();


class Database {
    constructor() {
        // connect to database
        this.pool = mysql.createPool({
            host: "localhost",
            user:   process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    };

    // returns a sql query
    async runQuery(query, parameters) {
        // run query
        const result = await this.pool.query(query, parameters);
        // error handling
        if (!result) {
            throw new Error ("Error in running query");
        }
        // return results
        return result[0];
    };

    // runs query to view departments
    async viewDepartments() {
        try {
            return await this.runQuery(
                "SELECT id, name AS department FROM department"
            );
        } catch (error) {
            throw new Error (`Error in querying departments: ${error}`);
        }
    };

    // runs query to view roles
    async viewRoles() {
        try {
            return await this.runQuery(
                `SELECT role.id, role.title, department.name AS department, role.salary 
                FROM \`role\` 
                JOIN department ON department.id = role.department_id`
            );
        } catch (error) {
            throw new Error (`Error in querying roles: ${error}`);
        }
    };

    // runes query to view employees
    async viewEmployees() {
        try {
            return await this.runQuery(
                `SELECT employee.id, employee.first_name, employee.last_name, role.title, 
                department.name, role.salary
                FROM employee
                LEFT JOIN \`role\` ON role.id = employee.role_id
                LEFT JOIN department ON department.id = role.department_id
                LEFT JOIN employee m ON m.id = employee.manager_id`
            );
        } catch (error) {
            throw new Error (`Error querying Employees: ${error}`);
        }
    };

    // runs query to add a department to the database
    async addDepartment(departmentName) {
        try {
            return await this.runQuery(
                `INSERT INTO department (name) 
                VALUES (?)`,
                departmentName
            );
        } catch (error) {
            throw new Error (`Error in adding department: ${error}`);
        }
    };

    // runs a query to add a role to the databse
    async addRole(roleTitle, roleSalary, roleDepartment) {
        try {
            return await this.runQuery(
                `INSERT INTO \`role\` (title, salary, department_id)
                VALUES (?, ?, (SELECT id FROM department WHERE name = ?))`,
                [roleTitle, roleSalary, roleDepartment]
            );
        } catch (error) {
            throw new Error (`Error adding role: ${error}`);
        }
    };

    // runs a query to add an employee to the database
    async addEmployee(firstName, lastName, roleTitle, managerId) {
        try {
            await this.runQuery(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (
                    ?,
                    ?,
                    (SELECT id FROM \`role\` WHERE title = ?),
                    (?))`,
                    [firstName, lastName, roleTitle, managerId]
            );
        } catch (error) {
            throw new Error (`Error adding employee: ${error}`);
        }
    };

    // runs a wuery to update an employees role
    async updateEmployeeRole(employeeName, newRole) {
        try {
            const employee = employeeName.split(" ");
            await this.runQuery(
                `UPDATE employee
                SET role_id = (SELECT id FROM \`role\` WHERE title = ?)
                WHERE first_name = ? AND last_name = ?`,
                [newRole, employee[0], employee[1]]
            );
        } catch (error) {
            throw new Error( `Error updating Employee Role: ${error}`);
        }
    };
};

module.exports = Database;
