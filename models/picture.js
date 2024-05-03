'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pictures.belongsTo(models.Product,{
        foreignKey:'product_id'
    })
    }
  }
  Pictures.init({
    path: DataTypes.STRING,
    product_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pictures',
  });
  return Pictures;
};