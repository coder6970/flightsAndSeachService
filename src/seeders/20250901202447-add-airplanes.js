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

      await queryInterface.bulkInsert('Airplanes', [
        {
        modelNumber: 'Boeing 747',
        capacity : 300,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        modelNumber: 'Airbus A350',
        capacity : 500,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        modelNumber: 'Boeing 787 Dreamliner',
        capacity : 400,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        modelNumber: 'Boeing 747-8',
        capacity : 150,
        createdAt : new Date(),
        updatedAt : new Date()
        },

        
    ], {});
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
