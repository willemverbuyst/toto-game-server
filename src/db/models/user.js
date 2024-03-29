'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.belongsTo(models.team);
      user.hasMany(models.prediction);
    }
  }
  user.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaulValue: 'voornaam',
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'achternaam',
      },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'password',
      },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
      admin: { type: DataTypes.BOOLEAN, defaultValue: false },
      totaalToto: { type: DataTypes.BOOLEAN, defaultValue: true },
      passwordChangedAt: { type: DataTypes.DATE },
      passwordResetToken: { type: DataTypes.STRING },
      passwordResetExpires: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'user',
    },
  );
  return user;
};
