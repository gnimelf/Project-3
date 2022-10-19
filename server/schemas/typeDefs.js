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
    reviews: [Review]!
  }

  type Review {
    _id: ID
    username: String
    reviewText: String
    stars: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String!): User
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    addReview(postId: ID!, username: String!, reviewText: String!, stars: Int!): Post
    removeReview(postId: ID!, reviewId: ID!): Post 
    addUser(username: String!, first: String!, last: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
