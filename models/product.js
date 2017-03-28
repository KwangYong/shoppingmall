"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: {type: DataTypes.STRING(50), allowNull: false},
    description: { type: DataTypes.TEXT, allowNull: false},
    regularPrice: { type: DataTypes.BIGINT, field: 'regular_price', allowNull: false },
    discountPrice: { type: DataTypes.BIGINT, field: 'discount_price' , allowNull: false },

  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        Product.hasMany(models.productSkuColorSize);
        Product.belongsTo(models.productCategory, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });

      }
    }
  });

  return Product;
};