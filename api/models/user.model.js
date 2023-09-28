const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const User = connection.define('user', {
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  }
  },
  {
    timestamps: false
  }
)

module.exports = User