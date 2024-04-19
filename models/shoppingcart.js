'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCart.belongsTo(models.Customer,{foreignKey:'customer_id'})
      ShoppingCart.hasMany(models.ShoppingCart_Device, {foreignKey:'shc_id'})
    }
  }
  ShoppingCart.init({
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};