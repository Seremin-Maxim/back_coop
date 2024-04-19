'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Infos extends Model {
    static associate(models) {
      Product_Infos.belongsTo(models.Product,
        {
          foreignKey:'product_id',
        })
    }
  }
  Product_Infos.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Info',
  });
  return Product_Infos;
};