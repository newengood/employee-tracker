// import libraries
const inquirer = require("inquirer");
const Database = require("../db/database");

class Inquirer {
    constructor() {

        // hold option selections
        this._prompts = {
            VIEWEMPLOYEES: "View all employees",
            ADDEMPLOYEE: "Add Employee",
            UPDATEEMPLOYEEROLE: "Update Employee Role",
            VIEWALLROLES: "Vew all Roles",
            ADDROLE: "Add Role",
            VIEWALLDEPARTMENTS: "View All Departments",
            ADDDEPARTMENT: "Add Department",
            QUIT: "Quit"
        };

        // display options 
        this._menu = {
            type: "list",
            name: "response",
            message: "what would you like to do?",
            choices: [
                this._prompts.VIEWEMPLOYEES,
                this._prompts.ADDEMPLOYEE,
                this._prompts.UPDATEEMPLOYEEROLE,
                this._prompts.VIEWALLROLES,
                this._prompts.ADDROLE,
                this._prompts.VIEWALLDEPARTMENTS,
                this._prompts.ADDDEPARTMENT,
                this._prompts.QUIT,
            ],
        }

        // instantiate databse
        this._db = new Database();
    }

    // return prompts
    get prompts() {
		return this._prompts;
    }

    // run main menu prompts
    async promptMenu() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(this._menu)
                .then(answer => {
                    resolve({ response: answer.response })
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // prompt user to add employee
    async addEmployee() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(
                    [
                        {
                            name: "first",
                            message: "What is the employee's first name?",
                        },
                        {
                            name: "last",
                            message: "What is the employee's last name?",
                        },
                        {
                            name: "role",
                            message: "What is the employe's role?",
                        },
                        {
                            name: "managerId",
                            message: "What is the employee manager's id?",
                        },
                    ]
                )
                .then(answer => {
                    resolve(answer);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // prompt user to update an employee role
    async updateEmployeeRole() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(
                    [
                        {
                            name: "employee",
                            message: "Which employee's role do you want to update",
                        },
                        {
                            name: "role",
                            message: "Which role do you want to assign the employee?",
                        }
                    ]
                )
                .then(answer => {
                    resolve(answer);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // prompt a user to add a role
    async addRole() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(
                    [
                        {
                            name: "title",
                            message: "What is the name of the role?",
                        },
                        {
                            name: "salary",
                            message: "What is the salary of the role?",
                        },
                        {
                            name: "department",
                            message: "Which department does the role belong to?",
                        }
                    ]
                )
                .then(answer => {
                    resolve(answer);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // prompt a user to add a department
    async addDepartment() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(
                    [
                        {
                            name: "name",
                            message: "What is the name of the department",
                        },
                    ]
                              )
                .then(answer => {
                    resolve(answer);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

module.exports = Inquirer;