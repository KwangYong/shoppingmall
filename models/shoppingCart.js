"use strict";

module.exports = (sequelize, DataTypes) => {
  const shoppingCart = sequelize.define("shoppingCart", {
    qty: {type: DataTypes.INTEGER},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    tableName: 'shopping_cart',
    classMethods: {
      associate: function(models) {
        models.productSkuColorSize.hasMany(shoppingCart,  { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });
        models.user.hasMany(shoppingCart,  { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });

      }
    }
  });

  return shoppingCart;
};