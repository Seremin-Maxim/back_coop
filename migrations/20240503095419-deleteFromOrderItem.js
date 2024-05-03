'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.addColumn('OrderItems', 'order_id', {
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:'Orders',
            key:'id'
          },
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
        queryInterface.removeColumn('OrderItems', 'order_id',{transaction})
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
