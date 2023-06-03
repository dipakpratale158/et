const Sequelize = require('sequelize');
const sequelize = require('../data/database');

const Expense = sequelize.define('expenses', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  Price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Price field is required.'
      }
    }
  },
  Quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Quantity field is required.'
      }
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Expense;