'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Abonnements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duree: {
        type: Sequelize.INTEGER
      },
      UtilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Utilisateurs',
          key : 'id'
        }
      },
      SubscriptionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Subscriptions',
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
    await queryInterface.dropTable('Abonnements');
  }
};