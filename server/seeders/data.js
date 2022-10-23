const Post = require("../models/Post");

const lorum = [
    "lorem",
    "imsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "curabitur",
    "vel",
    "hendrerit",
    "libero",
    "eleifend",
    "blandit",
    "nunc",
    "ornare",
    "odio",
    "ut",
    "orci",
    "gravida",
    "imperdiet",
    "nullam",
    "purus",
    "lacinia",
    "a",
    "pretium",
    "quis",
];

// grab random number from length of "lorum" list 
const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// Grab a random word from "lorum" list
const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

// const getRating = () => Math.floor(Math.random() * 4) + 1;

// Generate random post and then create post in db and added it userSeed that called the function
const getRandomPost = async (words) => {
    let message = "";
    for (let i = 0; i < words; i++) {
        message += ` ${getRandomWord()}`;
    }
     const post = new Post({
        title: getRandomWord(),
        description: message,
        // stars: getRating()
    });

   await Post.create(post);

    return post;
};



module.exports = userSeeds;
