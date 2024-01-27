"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user_role", "user_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
    await queryInterface.addColumn("user_role", "role_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "roles",
        },
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user_role", "user_id");
    await queryInterface.removeColumn("user_role", "role_id");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
