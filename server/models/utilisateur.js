'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Utilisateur.hasMany(models.Commande);

      models.Utilisateur.hasMany(models.Abonnement);

      models.Utilisateur.hasMany(models.LocalisationUtilisateur);

    }
  };
  Utilisateur.init({
    noms: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
    photo: DataTypes.STRING,
    type_paiement: DataTypes.STRING,
    numero_carte: DataTypes.STRING,
    code_secret: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Utilisateur',
  });
  return Utilisateur;
};