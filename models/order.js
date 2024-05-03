'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Order.hasOne(models.Payment, {foreignKey:'order_id'})
      Orders.hasMany(models.OrderItems, {foreignKey:'order_id'})
    }
  }
  Orders.init({
    total_price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    date: DataTypes.DATE,
    state: DataTypes.ENUM('заказ создан','на подтверждении','продавец собирает заказ','товары отправлены','товар можно забрать','получена'),
    country: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};