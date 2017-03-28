"use strict";

module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    name: {type: DataTypes.STRING(10), allowNull: false},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        Size.hasMany(models.productSkuColorSize);
      }
    }
  });

  return Size;
};