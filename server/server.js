const express = require("express");

// REQUIRE APOLLO SERVER
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// AUTHENTICATION
// const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require("./config/connection");
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// CONFIGURE APOLLO SERVER
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});