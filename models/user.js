"use strict";

const gender = [
  'MALE',
  'FEMALE'
]

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    username: {type: DataTypes.STRING},
    mdn: {type: DataTypes.STRING},
    gender: {type: DataTypes.ENUM(gender)},

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

  return user;
};