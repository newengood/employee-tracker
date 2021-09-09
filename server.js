// import libraries
const express = require('express');
const cTable = require("console.table");
const sequelize = require('./config/connection');
const Inquirer = require("./utils/inquirer");

// instantiate express, inquirer and port
const app = express();
const PORT = process.env.PORT || 3001;
const inquirer = new Inquirer();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start program
let menu = async () => {
    let quit = false;

    try {
        const { db, action } = await inquirer.promptMenu();
        if (db && action) {
            switch (action) {
                case inquirer.prompts.VIEWEMPLOYEES:
                    break;
                case inquirer.prompts.ADDEMPLOYEE:
                    break;
                case inquirer.prompts.UPDATEEMPLOYEEROLE:
                    break;
                case inquirer.prompts.VIEWALLROLES:
                    break;
                case inquirer.prompts.ADDROLE:
                    break;
                case inquirer.prompts.VIEWALLDEPARTMENTS:
                    break;
                case inquirer.prompts.ADDDEPARTMENT:
                    break;
                case inquirer.prompts.QUIT:
                    break;
            }
        }
        if (!quit) {
            await menu();
        }
    } catch(error) {
        console.error(error);
    }
};

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

menu();