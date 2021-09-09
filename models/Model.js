const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

//create department table
class Department extends Model {}

Department.init(
  {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'department'
  }
);

// create role table
class Role extends Model {}

Role.init(
  {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      }
    },
    salary: {
        type: Datatype.INTEGER,
    },
    department_id: {
        type: Datatype.INTEGER,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'department'
  }
);

// create foreign key of department_id
Department.hasMany(Role);

// create employee table
class Employee extends Model {}

Employee.init(
  {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      }
    },
    role_id: {
        type: Datatype.INTEGER,
    },
    manager_id: {
        type: Datatype.INTEGER,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'department'
  }
);

// create foreign key of role_id
Role.hasMany(Employee);





module.exports = (Department, Role, Employee);
