'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.removeColumn('Products', 'pictires_id', {transaction}),
        queryInterface.removeColumn('OrderItems', 'price', {transaction}),
        queryInterface.addColumn('Pictures', 'product_id', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'Products',
            key:'id'
          }
      }, {
          transaction,
      }),
        
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.addColumn('Products ', 'pictires_id', {
            type: Sequelize.STRING,
            allowNull: true,
            references:{
              model:'Pictures',
              key:'id'
            }
        }, {
            transaction,
        }),
        queryInterface.addColumn('OrderItems', 'price', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          transaction,
      }),  
      queryInterface.removeColumn('Pictures', 'product_id', {transaction}),
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
