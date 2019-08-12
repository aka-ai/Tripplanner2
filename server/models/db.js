const config = {
    database: 'tripPlanner',
    dialect: 'postgres',
    logging: false,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME
  }
 const Sequelize = require('sequelize');
 module.exports = new Sequelize(config.database, config.username, config.password, config);