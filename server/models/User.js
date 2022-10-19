const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: "You need add a username",
        },
        first: {
            type: String,
            required: "You need to add a first name",
            trim: true,
        },
        last: {
            type: String,
            required: "You need to add a last name",
            trim: true,
        },
        email: {
            type: String,
            required: "You need to add an email address",
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: "You need add a password",
            trim: true,
        },
        post: [
            {
                type: Schema.Types.ObjectId,
                ref: "post",
            },
        ],
    },

);

const User = model("user", userSchema);

module.exports = User;
