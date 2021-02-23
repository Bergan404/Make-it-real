'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    id: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    highlights: DataTypes.STRING,
    listPicture: DataTypes.STRING,
    price: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.User, { foreignKey: 'userId' });
    Posts.hasMany(models.Comments, { foreignKey: 'postId' });
  };
  return Posts;
};
