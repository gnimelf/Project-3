const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    fullname: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    review_text: {
        type: String
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
    },
});

module.exports = reviewSchema;