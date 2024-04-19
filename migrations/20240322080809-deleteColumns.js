'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.removeColumn('Products', 'description', {transaction}),
        queryInterface.removeColumn('Products', 'characteristic', {transaction}),

        queryInterface.removeColumn('ShoppingCart','total_price',{transaction}),

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
        queryInterface.addColumn('Products ', 'description', {
            type: Sequelize.STRING,
            allowNull: true,
        }, {
            transaction,
        }),
        queryInterface.addColumn('Products', 'characteristic', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          transaction,
      }),  
      queryInterface.addColumn('ShoppingCart', 'total_price', {
        type: Sequelize.INTEGER,
        allowNull: true,
    }, {
        transaction,
    }) 
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
