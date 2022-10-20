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
    me: User
  }

  type Mutation {
    addUser(username: String!, first: String!, last: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(userId: ID!, postTitle: String!, imageUrl: String!, postDescription: String!): Post
    removePost(postId: ID!): Post
    addReview(postId: ID!, username: String!, reviewText: String!, stars: Int!): Post
    removeReview(postId: ID!, reviewId: ID!): Post 
    updatePost(postId: ID!, title: String, image: String, description: String): Post
  }
`;

module.exports = typeDefs;
