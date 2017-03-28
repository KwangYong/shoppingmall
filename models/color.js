"use strict";

module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    name: {type: DataTypes.STRING(10), allowNull: false},
    hex: {type: DataTypes.STRING(6), allowNull: false},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        Color.hasMany(models.productSkuColorSize);
      }
    }
  });

  return Color;
};