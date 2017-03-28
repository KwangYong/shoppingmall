"use strict";
const sale = require('./sale/');

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    currentStatus: {type: DataTypes.ENUM(sale.currentStatus), allowNull: false, field: 'current_status',
      set : function(val) {
        this.setDataValue('currentStatus', val);
      }},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models)  => {
        Sale.belongsTo(models.saleGroup, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
        Sale.belongsTo(models.productSkuColorSize, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Sale;
};