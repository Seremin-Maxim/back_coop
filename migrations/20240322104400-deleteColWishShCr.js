'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.removeColumn('ShoppingCart', 'product_id', {transaction}), 
        queryInterface.removeColumn('ShoppingCart', 'quantity', {transaction}),  
        queryInterface.removeColumn('Wishlist', 'product_id', {transaction})        
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
        queryInterface.addColumn('ShoppingCart ', 'product_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
              model:'Products',
              key:'id'
            }
        }, {
            transaction,
        }),
        queryInterface.addColumn('ShoppingCart ', 'quantity', {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, {
          transaction,
      }),
      queryInterface.addColumn('Wishlist ', 'product_id', {
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
  }
};
