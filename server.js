// import libraries
const cTable = require("console.table");
const Inquirer = require("./utils/inquirer");
const Database = require("./db/database");

// instantiate inquirer, database
const inquirer = new Inquirer();
const db = new Database();

// run main menu
const menu = async () => {
    try {

        // receive prompts form command line
        const { response } = await inquirer.promptMenu();
        if (response) {

            // runs appropriate query from selected option
            switch (response) {

                // view employee option
                case inquirer.prompts.VIEWEMPLOYEES:
                    console.table(await db.viewEmployees());
                    break;

                // add employee option
                case inquirer.prompts.ADDEMPLOYEE:

                    // await input parameters
                    answer = await inquirer.addEmployee();

                // deconstruct response
                    const { first, last, role: addRole, managerId } = answer;

                // run query
                    await db.addEmployee(first, last, addRole, managerId);

                // display success message
                    console.log(`Added an employee named ${first} ${last}`)
                    break;

                // update employee option
                case inquirer.prompts.UPDATEEMPLOYEEROLE:
                    answer = await inquirer.updateEmployeeRole();
                    const { employee: updateEmployee, role: updateRole } = answer;
                    await db.updateEmployeeRole(updateEmployee, updateRole);
                    console.log(`Updated ${updateEmployee}'s role to ${updateRole}`)
                    break;

                // view roles option
                case inquirer.prompts.VIEWALLROLES:
                    console.table(await db.viewRoles());
                    break;

                // add role option
                case inquirer.prompts.ADDROLE:
                    answer = await inquirer.addRole();
                    const { title, salary, department } = answer;
                    await db.addRole(title, salary, department);
                    console.log(`Added ${title} role to the ${department} department`)
                    break;

                // view departments option
                case inquirer.prompts.VIEWALLDEPARTMENTS:
                    console.table(await db.viewDepartments());
                    break;

                // add department option
                case inquirer.prompts.ADDDEPARTMENT:
                    answer = await inquirer.addDepartment();
                    const { name } = answer;
                    await db.addDepartment(name);
                    console.log(`Added the ${name} department`)
                    break;

                // quit option
                case inquirer.prompts.QUIT:
                    return;
            }

            // continue to run code after selection
            return await menu();
        }
        
    // error handling
    } catch(error) {
        console.error(error);
    }
};

// begin code
menu()