const Sequelize = require('sequelize');

const sequelize = new Sequelize('expensetracker', 'root', 'Dipak@12345', {
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;