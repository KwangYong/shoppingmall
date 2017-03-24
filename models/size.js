"use strict";

module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define("size", {
    name: {type: DataTypes.STRING(10), allowNull: false},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return size;
};