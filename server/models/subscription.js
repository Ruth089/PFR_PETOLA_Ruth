'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Subscription.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });

      models.Subscription.hasMany(models.Abonnement);
    }
  };
  Subscription.init({
    description: DataTypes.STRING,
    type_de_collecte: DataTypes.STRING,
    prix: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};