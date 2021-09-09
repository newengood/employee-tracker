const inquirer = require("inquirer");


class Inquirer {
    constructor() {
        this._prompts = {
            VIEWEMPLOYEES = "View all employees",
            ADDEMPLOYEE = "Add Emplpyee",
            UPDATEEMPLOYEEROLE = "Update Employee Role",
            VIEWALLROLES = "Vew all Roles",
            ADDROLE = "Add Role",
            VIEWALLDEPARTMENTS = "View All Departments",
            ADDDEPARTMENT = "Add Department",
            QUIT = "Quit"
        };
        this._menu = {
            type: "list",
            name: "action",
            message: "what would you like to do?",
            choices: [
                this.prompts.VIEWEMPLOYEES,
                this.prompts.ADDEMPLOYEE,
                this.prompts.UPDATEEMPLOYEEROLE,
                this.prompts.VIEWALLROLES,
                this.prompts.ADDROLE,
                this.prompts.VIEWALLDEPARTMENTS,
                this.prompts.ADDDEPARTMENT,
                this.prompts.QUIT,
            ]
        };
        this._db = new Database();
    }
    get prompts() {
        return this.prompts;
    }

    async promptMenu() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(this.menu)
                .then(answer => {
                    switch (this.menu.choices.indexOf(answer.action) + 1) {
                        case 1:
                            resolve({ db: this.db, action: this.prompts.VIEWEMPLOYEES });
                            break;
                        case 2: 
                            resolve({ db: this.db, action: this.prompts.ADDEMPLOYEE });
                            break;
                        case 3: 
                            resolve({ db: this.db, action: this.prompts.UPDATEEMPLOYEEROLE });
                            break;
                        case 4: 
                            resolve({ db: this.db, action: this.prompts.VIEWALLROLES });
                            break;
                        case 5: 
                            resolve({ db: this.db, action: this.prompts.ADDROLE });
                            break;
                        case 6: 
                            resolve({ db: this.db, action: this.prompts.VIEWALLDEPARTMENTS });
                            break;
                        case 7: 
                            resolve({ db: this.db, action: this.prompts.ADDDEPARTMENT });
                            break;
                        case 8: 
                            resolve({ db: this.db, action: this.prompts.QUIT });
                            break;
                    }
                })
                .catch(error => {
                    reject(error);
                })
        }
        )
    }
}

module.exports = Inquirer;