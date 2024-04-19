'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart_Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCart_Device.belongsTo(models.Product,
        {
          foreignKey:'product_id',
        })
      ShoppingCart_Device.belongsTo(models.ShoppingCart,
        {
          foreignKey:'shc_id',
        })
    }
  }
  ShoppingCart_Device.init({
    product_id: DataTypes.INTEGER,
    shc_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCart_Device',
  });
  return ShoppingCart_Device;
};