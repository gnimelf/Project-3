const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const postSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        review: [reviewSchema],
    }
);

const Post = model('post', postSchema);

module.exports = Post;
