'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wishlist_Device', {
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
      wishlist_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Wishlist',
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
    await queryInterface.dropTable('Wishlist_Device');
  }
};