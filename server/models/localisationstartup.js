'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocalisationStartup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.LocalisationStartup.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });    
      models.LocalisationStartup.belongsTo(models.CoordonneStartup, {
        foreignKey : {
          allowNull: false
        }
      });    

    }
  };
  LocalisationStartup.init({
    province: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LocalisationStartup',
  });
  return LocalisationStartup;
};