const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');


const postSchema = new Schema(
    {
        title: {
            type: String,
            // minlength: 1,
            maxlength: 100,
            required: true,
            trim: true
        },
        image: {
            type: String,
        },
        description: {
            type: String,
            // minlength: 1,
            maxlength: 280,
            // required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
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
                createdAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
    }
);

const Post = model('post', postSchema);

module.exports = Post;
