'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.addColumn('Products', 'brand_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
              model:'Brand',
              key:'id'
            }
        }, {
            transaction,
        }),
        queryInterface.addColumn('Products', 'product_info_id', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'Product_Info',
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
        queryInterface.removeColumn('Products', 'brand_id',{transaction}),
        queryInterface.removeColumn('Products','product_info_id',{transaction})
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
