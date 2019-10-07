//this part will serve for creating a table with players
// it has to be extended with isLogedin column

const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define('player', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isLoggedIn: {
      type: Sequelize.BOOLEAN,
      allowNull: false
  } 
}, {
  timestamps: false,
  tableName: 'players'
})

module.exports = Player