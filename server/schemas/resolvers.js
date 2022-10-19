const { User, Post } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("post");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("post");
        },
        posts: async () => {
            return Post.find({});
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addReview: async (parent, { postId, username, reviewText, stars }) => {
            // if (context.user) {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: {
                        reviews: { reviewText, username, stars },
                    },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
            // }
            // throw new AuthenticationError('You need to be logged in!');
        },
        removeReview: async (parent, { postId, reviewId }) => {
            // if (context.user) {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $pull: {
                        reviews: {
                            _id: reviewId,
                        },
                    },
                },
                {new: true}
            );
            // }
            // throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;
