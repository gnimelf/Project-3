// imports
const db = require("../config/connection");
const {User, Post} = require("../models");
const userSeeds = require("./data")



db.once('open', async () => {

    try {
        await User.deleteMany({});
        await Post.deleteMany({});

        await User.create(userSeeds);

        console.log('SEEDING COMPLETE');
        process.exit(0);
    } catch (err) {
        throw err;
    } 
});