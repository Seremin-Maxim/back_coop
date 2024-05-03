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
      Orders.belongsTo(models.Customer, {foreignKey:'customer_id'});
    }
  }
  Orders.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    date: DataTypes.DATE,
    state: DataTypes.ENUM('заказ создан','на подтверждении','продавец собирает заказ','товары отправлены','товар можно забрать','получена'),
    country: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    method: DataTypes.STRING,
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};