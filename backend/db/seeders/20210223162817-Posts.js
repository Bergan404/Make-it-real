'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      const posts = await queryInterface.bulkInsert('Posts', [
        { postTitle: 'New watch', description: 'this will revolutionize the big industry', highlights: 'shiny and handmade', listPicture: 'none', price: '$20.00', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Black Mug', description: 'This mug is specially handmade to have whatever you would like printed onto it!', highlights: 'handmade', listPicture: 'none', price: '$17', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Embroidery File', description: 'Custom embroidery files made right here in house cant get any better than that.', highlights: 'Digital Download', listPicture: 'none', price: '$27', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Poster', description: 'This is just a file that I created to see if it would hold up to the big leaguers.', highlights: 'Digital Download', listPicture: 'none', price: '$4.47', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Mirror', description: 'Custom mirror cut and made just the way that you want it.', highlights: 'handmade', listPicture: 'none', price: '$75', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Twisty Candles', description: 'Formed in a mold with the most premium type of wax that money can buy, meant to last up to at least 15 hours', highlights: 'handmade', listPicture: 'none', price: '$18.50', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Wooden Coffee Table', description: 'Spent hours upon days and upon weeks creating and shapping this beautiful piece of art', highlights: 'handmade', listPicture: 'none', price: '$100', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Watch holder', description: 'Made from dragon skin this is an item that cant be beat, hours upon days of crating have come to this.', highlights: 'handmade', listPicture: 'none', price: '$37', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'PVC Lamp', description: 'Lamp made from PVC that was bought with materials from the Home Depot', highlights: 'handmade', listPicture: 'none', price: '$50', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Laptop Stand', description: 'Ever wonder why your laptop sounds like a car running, well thats because it has no space to breath always sitting flat on the surface so why not give it a little elivation', highlights: 'handmade', listPicture: 'none', price: '$50', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Rubix Cube', description: 'I replaced the stickers on mine and no I have absolutely no use for it!', highlights: 'handmade', listPicture: 'none', price: '$5', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Kitchen Shelf Dividers', description: 'Why not keep spices and cans in the same cabnit, WELL now you can with the new shelf divider for your kitchen', highlights: 'handmade', listPicture: 'none', price: '35$', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Software of Choice', description: 'I will make any software that you desire', highlights: 'Digital Download', listPicture: 'none', price: '$150', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'HandMade Rug', description: 'This took at lease 15 hours to make now my hands hurt', highlights: 'handmade', listPicture: 'none', price: '$40', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Picture Book', description: 'Send me pictures and I will turn them into a one of a kind Picture book for you and the whole family to enjoy.', highlights: 'handmade', listPicture: 'none', price: '$27', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Coffee Grounds', description: 'I will hand grind the coffee seeds and send them to you so you dont have to so it!', highlights: 'handmade', listPicture: 'none', price: '$15', userId: 1, createdAt: new Date(), updatedAt: new Date()},
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
