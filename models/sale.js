"use strict";

module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {

  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: function(models) {
        models.saleGroup.hasMany(sale,  { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });

      }
    }
  });

  return sale;
};