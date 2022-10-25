'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salutation: {
        type: Sequelize.STRING
      },
      fname: {
        type: Sequelize.STRING
      },
      mname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      workphone: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      workemail: {
        type: Sequelize.STRING
      },
      persemail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};