'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart_Devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCart_Devices.belongsTo(models.Product,
        {
          foreignKey:'product_id',
        })
      ShoppingCart_Devices.belongsTo(models.ShoppingCarts,
        {
          foreignKey:'shc_id',
        })
    }
  }
  ShoppingCart_Devices.init({
    product_id: DataTypes.INTEGER,
    shc_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCart_Devices',
  });
  return ShoppingCart_Devices;
};

