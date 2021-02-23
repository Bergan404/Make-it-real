'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.User, { foreignKey: 'userId' });
    Comments.belongsTo(models.Posts, { foreignKey: 'postId' });
  };
  return Comments;
};
