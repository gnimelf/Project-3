import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation} from '@apollo/client';

import ReviewForm from "../components/ReviewForm";
import { QUERY_POSTS, GET_ME, QUERY_USERS  } from "../utils/Queries";

import Auth from '../utils/Auth'


const Review = () => {
  const {username: userParam } = useParams();
  const { loading, data} = useQuery(userParam ? QUERY_USERS : GET_ME,{
    variables: {username: userParam },
  });

  const user = data?.me || data?.user || {};

  if(Auth.loggedIn() && Auth.getProfile().data.username === userParam){
    return <Navigate to = '/' />;
  }

  if(loading){
    return <div>Loading...</div>
  }
  if (!user?.username){
    return(
      <h4>
        You need to be logged in to see this.  Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h1>Review Page</h1>
      <div>
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

    </div>
    </div>
  );
}

export default Review;