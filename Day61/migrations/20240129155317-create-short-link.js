'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('short_links', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      link_detail: {
        type: Sequelize.STRING,
      },
      link_short: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      access_times: {
        type: Sequelize.INTEGER,
      },
      safe_link:{
        type:Sequelize.BOOLEAN,
        default: true,
      },
      id_custom:{
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('short_links');
  }
};