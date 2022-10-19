const { User, Post } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
  }
};

module.exports = resolvers;