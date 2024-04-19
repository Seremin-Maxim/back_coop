'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('Brand', 'Brands');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('Brands', 'Brand');
  }
};
