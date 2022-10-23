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

// Generage random post and then create post in db and added it userSeed that called the function
const getRandomPost = (words) => {
    let message = "";
    for (let i = 1; i < words; i++) {
        message += ` ${getRandomWord()}`;
    }
    const post = new Post({
        title: getRandomWord(),
        description: message
    });

    Post.create(post);

    return post;
};

const userSeeds = [
    {
        username: "bkernighan",
        first: "Brian",
        last: "Kernighan",
        email: "bkernighan@techfriends.dev",
        password: "password01",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "mkanatalexander",
        first: "Max",
        last: "Kanat-Alexander",
        email: "mkanatalexander@techfriends.dev",
        password: "password02",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "amiko",
        first: "Amiko",
        last: "Utaki",
        email: "amiko@techfriends.dev",
        password: "password03",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "kbeck",
        first: "Kent",
        last: "Beck",
        email: "kbeck@techfriends.dev",
        password: "password04",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "evberard",
        first: "Edward V.",
        last: "Berard",
        email: "evberard@techfriends.dev",
        password: "password05",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "akay",
        first: "Alan",
        last: "Kay",
        email: "akay@techfriends.dev",
        password: "password06",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "choare",
        first: "C.A.R.",
        last: "Hoare",
        email: "choare@techfriends.dev",
        password: "password07",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "dthomas",
        first: "David",
        last: "Thomas",
        email: "dthomas@techfriends.dev",
        password: "password08",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
    {
        username: "dknuth",
        first: "Donald",
        last: "Knuth",
        email: "dknuth@techfriends.dev",
        password: "password09",
        posts: [getRandomPost(Math.floor(Math.random()*10))],
    },
];

module.exports = userSeeds;
