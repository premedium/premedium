'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        phone_number: {
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          type: Sequelize.STRING
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        underscored: true
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
