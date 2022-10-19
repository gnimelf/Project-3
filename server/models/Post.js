const { Schema, model } = require("mongoose");

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
        reviews: [
            {
                username: {
                    type: String,
                    trim: true
                },
                reviewText: {
                    type: String
                },
                stars: {
                    type: Number,
                    min: 1,
                    max: 5,
                },
            }
        ],
    }
);

const Post = model('post', postSchema);

module.exports = Post;
