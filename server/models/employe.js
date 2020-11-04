'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Employe.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });     

    }
  };
  Employe.init({
    nom_employe: DataTypes.STRING,
    prenom: DataTypes.STRING,
    pwd: DataTypes.STRING,
    email: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'Employe',
  });
  return Employe;
};