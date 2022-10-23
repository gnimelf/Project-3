import {gql} from '@apollo/client';

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      username
      first
      last
      email
      password
      posts {
        _id
        title
        image
        description
        reviews {
          _id
          username
          reviewText
          stars
        }
      }
    }
  }
  `;

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    username
    first
    last
    email
    posts {
      _id
      title
      image
      description
      reviews {
        _id
        username
        reviewText
        stars
      }
    }
  }
}
`;

export const QUERY_POSTS = gql`
query Posts {
    posts {
      _id
      title
      image
      description
      reviews {
        _id
        username
        reviewText
        stars
      }
    }
  }
`;

export const QUERY_POST = gql`
query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      image
      description
      reviews {
        _id
        username
        reviewText
        stars
      }
    }
  }
`;

export const GET_ME = gql`
query Post {
    me {
      _id
      username
      first
      last
      email
      password
      posts {
        _id
        title
        image
        description
        reviews {
          _id
          username
          reviewText
          stars
        }
      }
    }
  }
`;


  