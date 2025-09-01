'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        await queryInterface.bulkInsert('Airports',[
          {
            name : "Indira Gandhi Internation Airtport",
            city_id : 17,
            createdAt : new Date(),
            updatedAt : new Date()
          },
          {
            name : "Safdarjung Airtport",
            city_id : 17,
            createdAt : new Date(),
            updatedAt : new Date()
          },
          {
            name : "Raja Bhoj Airtport",
            city_id : 18,
            createdAt : new Date(),
            updatedAt : new Date()
          }
        ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
