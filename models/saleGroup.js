"use strict";

module.exports = (sequelize, DataTypes) => {
  const SaleGroup = sequelize.define("saleGroup", {
    userComment: {type: DataTypes.STRING, field: 'user_comment'},
    adminComment: {type: DataTypes.STRING, field: 'admin_comment'},
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true,
    tableName: 'sale_group',
    classMethods: {
      associate: (models) => {
        SaleGroup.hasMany(models.sale);
        SaleGroup.belongsTo(models.user, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return SaleGroup;
};