// import all models
const Post = require('./Post');
const User = require('./User');
const Heart = require('./Heart');
const Comment = require('./Comment');
const RandomWord = require('./RandomWord')

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
/*
User.belongsToMany(Post, {
  through: Heart,
  as: 'hearted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Heart,
  as: 'hearted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Heart.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

Post.hasMany(Heart, {
  foreignKey: 'post_id'
});
*/
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Heart, RandomWord };
