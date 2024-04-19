'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist_Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wishlist_Device.belongsTo(models.Product,
        {
          foreignKey:'product_id',
        })
      Wishlist_Device.belongsTo(models.Product,
        {
          foreignKey:'wishlist_id',
        })
    }
  }
  Wishlist_Device.init({
    product_id: DataTypes.INTEGER,
    wishlist_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wishlist_Device',
  });
  return Wishlist_Device;
};