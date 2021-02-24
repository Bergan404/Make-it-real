'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    // id: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    description: DataTypes.STRING,
    highlights: DataTypes.STRING,
    listPicture: DataTypes.STRING,
    price: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    const columnMapping = {through: 'ShoppingCartPosts', otherKey: 'shoppingCartId', foreignKey: 'postId'};
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.belongsToMany(models.ShoppingCart, columnMapping)
    Post.hasMany(models.Comment, { foreignKey: 'postId' });
  };
  return Post;
};
