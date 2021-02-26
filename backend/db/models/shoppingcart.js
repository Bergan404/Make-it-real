'use strict';

const shoppingcartpost = require("./shoppingcartpost");

module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    // id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  ShoppingCart.associate = function(models) {
    const columnMapping = {through: 'ShoppingCartPosts', otherKey: 'postId', foreignKey: 'shoppingCartId'};
    ShoppingCart.belongsToMany(models.Post, columnMapping);
    ShoppingCart.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ShoppingCart;
};
