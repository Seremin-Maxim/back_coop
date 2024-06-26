'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsToMany(models.Role,
        {
          through: 'UserRoles', 
          foreignKey: 'userId',
          as: 'roles'
        })
      Customer.hasOne(models.Wishlist, {foreignKey:'customer_id'})
      Customer.hasOne(models.ShoppingCarts, {foreignKey:'customer_id'})
      Customer.hasMany(models.Orders, {foreignKey:'customer_id'});
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};