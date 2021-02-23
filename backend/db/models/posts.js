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
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.hasMany(models.Comment, { foreignKey: 'postId' });
  };
  return Post;
};
