'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('Product_Info', 'Product_Infos');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('Product_Infos', 'Product_Info');
  }
};
