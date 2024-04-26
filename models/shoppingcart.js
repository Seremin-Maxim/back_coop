'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCarts.belongsTo(models.Customer,{foreignKey:'customer_id'})
      ShoppingCarts.hasMany(models.ShoppingCart_Devices, {foreignKey:'shc_id'})
    }
  }
  ShoppingCarts.init({
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCarts',
  });
  return ShoppingCarts;
};