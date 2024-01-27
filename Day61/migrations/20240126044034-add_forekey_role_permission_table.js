'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("role_permission", "role_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "roles",
        },
        key: "id",
      },
    });
    await queryInterface.addColumn("role_permission", "permission_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "permissions",
        },
        key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("role_permission", "role_id");
    await queryInterface.removeColumn("role_permission", "permission_id");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
