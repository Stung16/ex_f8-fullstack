"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const permissions = [
      {
        value: "xem",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        value: "Sửa",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        value: "Xoá",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        value: "Thêm",
        created_at: new Date(), 
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("permissions", permissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
