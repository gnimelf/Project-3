const { Schema, model } = require('mongoose');
const Post = require('./Post')


const reviewSchema = new Schema({
    first: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    review_text: {
        type: String
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'post',
        required: true
    }
    
});

module.exports = reviewSchema;