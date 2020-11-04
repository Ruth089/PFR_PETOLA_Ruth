'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoordonneStartup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CoordonneStartup.hasMany(models.LocalisationStartup);
    }
  };
  CoordonneStartup.init({
    num_tel: DataTypes.INTEGER,
    ville: DataTypes.STRING,
    commune: DataTypes.STRING,
    quartier: DataTypes.STRING,
    avenu: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CoordonneStartup',
  });
  return CoordonneStartup;
};