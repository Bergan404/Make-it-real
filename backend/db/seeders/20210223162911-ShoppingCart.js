'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shoppingCarts = await queryInterface.bulkInsert('ShoppingCarts', [
      {userId: 1, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
