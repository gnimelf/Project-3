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

  // const [formState, setFormState] = useState({
  //   title: "",
  // });
  // const [addPost, { error, postdata }] = useMutation(ADD_POST);

  // const handleChange = (event) => {
  //   const { title, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [title]: value,
  //   });

  //   const hand = async (event) => {
  //     event.preventDefault();
  //     console.log(formState);
  //     try {
  //       const { data } = await addPost({
  //         variables: { ...formState },
  //       });

  //       Auth.login(data.addUser.token);
  //     } catch (e) {}
  //   };
  // };
  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this.  Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <h1>Review Page</h1>
      <div>
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>
        {/* <div className="card" style={{ width: "18rem" }}>
          <img
            src="/assets/images/TikTok.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
            <h5 className="card-title">Product Name:</h5>
            <input
              className="form-input"
              placeholder="Product Name"
              name="title"
              type="text"
              value={setFormState.title}
              onChange={handleChange}
            />
            <p className="card-text">Product Review:</p>
            <ul className="text-center"></ul>
            <div clas="rating text-center">Rated</div>
            <div>
              {" "}
              <StarRating />{" "}
            </div>

            </form>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Review;
