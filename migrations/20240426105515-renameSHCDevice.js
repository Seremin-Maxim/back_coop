'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('ShoppingCart_Device', 'ShoppingCart_Devices');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('ShoppingCart_Devices', 'ShoppingCart_Device');
  }
};
