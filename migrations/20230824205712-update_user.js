'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('update_user', 'telephone', {
        type: Sequelize.STRING(11),
        allowNull: true
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'telephone')
  }
};
