'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      const posts = await queryInterface.bulkInsert('Posts', [
        { postTitle: 'New watch', description: 'this will revolutionize the big industry', highlights: 'shiny and handmade', listPicture: 'https://lh3.googleusercontent.com/proxy/QYiz6Jmjmzg6wwLXyABgYPUL9t6dWZoKype1Sios8rz-7ilsSvGPoH_ttN5AQg8YQYNB0_tTVPVWwLrZOK8NdgLz4P0TpNHVu8lywAAyV_1s50_DzVLi_hwizLGMBqAmKg', price: '$20.00', userId: 1, createdAt: new Date(), updatedAt: new Date()}
      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
