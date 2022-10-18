const { Schema, model } = require("mongoose");
const { Review } = require("./Review");

const postSchema = new Schema(
    {
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
        meta: {
            upvotes: Number,
            bookmarks: Number,
          },
    }
);

const Post = model('post', postSchema);

module.exports = Post;
