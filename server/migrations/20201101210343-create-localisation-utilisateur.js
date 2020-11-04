'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LocalisationUtilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province: {
        type: Sequelize.STRING
      },
      UtilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Utilisateurs',
          key : 'id'
        }
      },
      CoordonneUtilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'CoordonneUtilisateurs',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LocalisationUtilisateurs');
  }
};