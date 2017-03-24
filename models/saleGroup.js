"use strict";

module.exports = (sequelize, DataTypes) => {
  const saleGroup = sequelize.define("saleGroup", {


  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    tableName: 'sale_group',
    classMethods: {
      associate: function(models) {
        models.user.hasMany(saleGroup,  { foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });
      }
    }
  });

  return saleGroup;
};