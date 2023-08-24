'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('users', 'telephone', {
        type: Sequelize.STRING(11),
        allowNull: true
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'telephone')
  }
};
