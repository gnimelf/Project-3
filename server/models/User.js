const { Schema, model } = require("mongoose");
// const reviewSchema = require("./Review");

const userSchema = new Schema(
    {
        first: {
            type: String,
            required: "You need to a first name",
            trim: true,
        },
        last: {
            type: String,
            required: "You need to a last name",
            trim: true,
        },
        email: {
            type: String,
            required: "You need an email address",
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: "You need a password",
            trim: true,
        },
        post: [
            {
                type: Schema.Types.ObjectId,
                ref: "post",
            },
        ],
    },
    // include virtuals to be included
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual property
userSchema
  .virtual('fullName')
  // Getter
  .get(() => {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

const User = model("user", userSchema);

module.exports = User;
