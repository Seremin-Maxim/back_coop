'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Product_Info,
        {
          foreignKey:'product_id'
        })
      Product.belongsTo(models.Category,
        {
          foreignKey:'category_id',
        })
      Product.hasOne(models.Wishlist_Device,{
          foreignKey:'product_id'
      })
      Product.hasOne(models.ShoppingCart_Device,{
          foreignKey:'product_id'
      })
      Product.hasMany(models.Picture,{
        foreignKey:'product_id'
      })
      // ЭТО Я ИЗМЕНИЛ
      Product.hasOne(models.OrderItem, {
        foreignKey: 'order_item_id'
    });
      Product.belongsTo(models.Brands,
        {
          foreignKey:'brand_id',
        })      
    }
  }
  Product.init({
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    SDK: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};