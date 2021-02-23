'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.hasMany(models.Posts, { foreignKey: 'postId' });
    ShoppingCart.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ShoppingCart;
};
