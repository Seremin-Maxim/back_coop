'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItems.belongsTo(models.Product,
        {
          foreignKey: 'product_id',
        })
      OrderItems.belongsTo(models.Orders,
        {
          foreignKey: 'order_id',
        })
    }
  }
  
  OrderItems.init({
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};