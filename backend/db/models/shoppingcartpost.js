'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCartPost = sequelize.define('ShoppingCartPost', {
    postId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER
  }, {});
  ShoppingCartPost.associate = function(models) {
    // associations can be defined here
  };
  return ShoppingCartPost;
};