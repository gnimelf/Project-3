import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, GET_ME } from '../utils/Queries';

import Auth from '../utils/Auth';

const Review = () => {
  const { username: userParam } = useParams();

   // If there is no `profileId` in the URL as a parameter, execute the `GET_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/review" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Review;