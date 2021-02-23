'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    // id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Post, { foreignKey: 'postId' });
  };
  return Comment;
};
