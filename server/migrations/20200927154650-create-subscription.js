'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heure_debut: {
        allowNull: true,
        type: Sequelize.DATE
      },
      heure_fin: {
        allowNull: true,
        type: Sequelize.DATE
      },
      type_de_collecte: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prix: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      StartupId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Startups',
          key : 'id'
        }
      },
      // id_utilisateur: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references : {
      //     model : 'Utilisateurs',
      //     key : 'id'
      //   }
      // },
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
    await queryInterface.dropTable('Plannings');
  }
};