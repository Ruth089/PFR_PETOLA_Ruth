'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocalisationUtilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.LocalisationUtilisateur.belongsTo(models.Utilisateur, {
        foreignKey : {
          allowNull: false
        }
      });    
      models.LocalisationUtilisateur.belongsTo(models.CoordonneUtilisateur, {
        foreignKey : {
          allowNull: false
        }
      });    
    }
  };
  LocalisationUtilisateur.init({
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LocalisationUtilisateur',
  });
  return LocalisationUtilisateur;
};