import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      username
      first
      last
      email
    }
  }
}   
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $first: String!, $last: String!, $email: String!, $password: String!) {
  addUser(username: $username, first: $first, last: $last, email: $email, password: $password) {
    token
    user {
      username
      first
      last
      email
    }
  }
}`;

  export const ADD_POST = gql`
  mutation AddPost($userId: ID!, $postTitle: String!, $imageUrl: String!, $postDescription: String!) {
    addPost(userId: $userId, postTitle: $postTitle, imageUrl: $imageUrl, postDescription: $postDescription) {
      title
      image
      description
    }
  }
  `;

  export const REMOVE_POST = gql`
  mutation AddPost($postId: ID!) {
    removePost(postId: $postId) {
      title
    }
  }
  `;

  export const ADD_REVIEW = gql`
  mutation AddReview($postId: ID!, $username: String!, $reviewText: String!, $stars: Int!) {
    addReview(postId: $postId, username: $username, reviewText: $reviewText, stars: $stars) {
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

  export const REMOVE_REVIEW = gql`
  mutation AddReview($postId: ID!, $reviewId: ID!) {
    removeReview(postId: $postId, reviewId: $reviewId) {
      reviews {
        _id
        username
        reviewText
        stars
      }
    }
  }
  `;

  export const UPDATE_POST = gql`
  mutation UpdatePost($postId: ID!, $title: String, $image: String, $description: String) {
    updatePost(postId: $postId, title: $title, image: $image, description: $description) {
      _id
      title
      image
      description
    }
  }
  `;

