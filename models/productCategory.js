"use strict";

module.exports = (sequelize, DataTypes) => {
  const productCategory = sequelize.define("productCategory", {
    name: {type: DataTypes.STRING(50), allowNull: false },

  }, {
    paranoid: true,
    underscored: true,
    version: true,
    tableName: 'product_category',
    classMethods: {
      associate: function(models) {
        productCategory.hasMany(productCategory, { foreignKey: 'parent_id', useJunctionTable: false })


      }
    }
  });

  return productCategory;
};