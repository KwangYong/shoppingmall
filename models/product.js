"use strict";

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
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
      associate: function(models) {
        models.productCategory.hasMany(product, { allowNull: false });


      }
    }
  });

  return product;
};