'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};