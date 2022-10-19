const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
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
        match: [/.+@.+\..+/, "Must match an email address!"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: "You need add a password",
        minlength: 5,
        trim: true,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "post",
        },
    ],
});

// hash user password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// validate password for loggin in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
