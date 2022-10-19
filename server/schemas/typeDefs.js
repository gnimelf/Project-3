const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    first: String
    last: String
    email: String
    password: String
    posts: [Post]!
  }
  type Post {
    _id: ID
    title: String
    image: String
    description: String
    review: [Review]!
  }

  type Review {
    _id: ID
    fullname: String
    review_text: String
    starts: Int
  }

  type Query {
    users: [User]!
  }
`;

module.exports = typeDefs;
