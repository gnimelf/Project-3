import {gql} from '@apollo/client';

export const LOGIN_USER = gql`   
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        _id
        username
      }
    }
  }`;

  export const ADD_USER = gql`
  mutation AddUser($username: String!, $first: String!, $last: String!, $password: String!) {
    addUser(username: $username, first: $first, last: $last, password: $password) {
      token
      user {
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
  }`;

