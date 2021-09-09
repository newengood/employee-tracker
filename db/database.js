const mysql = require("mysql2/promise");
require('dotenv').config();

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user:   process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }

}

module.exports = Database;
