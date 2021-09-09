const express = require('express');
const sequelize = require('./config/connection');

const Department = require('./models/Model');
const Role = require('./models/Model');
const Employee = require('./models/Model');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
