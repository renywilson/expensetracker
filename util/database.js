
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

// get config vars
dotenv.config();


console.log(process.env)
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD,{
    dialect: 'mysql',
    host: process.env.DB_HOST
     
});

console.log('Database connected');
module.exports = sequelize;
