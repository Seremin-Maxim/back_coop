'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShoppingCart_Device', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Products',
          key:'id'
        }
      },
      shc_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'ShoppingCart',
          key:'id'
        }
      },
      quantity: {
        allowNull:false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ShoppingCart_Device');
  }
};