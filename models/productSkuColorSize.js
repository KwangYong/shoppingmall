"use strict";

module.exports = (sequelize, DataTypes) => {
  const productSkuColorSize = sequelize.define("productSkuColorSize", {
    name: {type: DataTypes.STRING(50), allowNull: false },
  }, {
    paranoid: true,
    underscored: true,
    version: true,
    tableName: 'product_sku_color_size',
    classMethods: {
      associate: function(models) {
        models.product.hasMany(productSkuColorSize,  { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });
        models.color.hasMany(productSkuColorSize, { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });
        models.size.hasMany(productSkuColorSize, { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });
      }
    }
  });
  return productSkuColorSize;
};