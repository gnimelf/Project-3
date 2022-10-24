import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/Mutations";
import { QUERY_POSTS, GET_ME } from "../../utils/Queries";

import Auth from "../../utils/Auth";

const PostForm = () => {
//   const [postDescription, setPostDescription] = useState("");
  const [formState, setFormState] = useState({
    username: Auth.getProfile().data.username,
    title: '',
    description: '',
    url: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: GET_ME });
      cache.writeQuery({
        query: GET_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {...formState},
      });
    } catch (e) {
        console.error(e);
      }
    // clear form values
    setFormState({
        title: '',
        description: '',
        url: '',
      });
  
}
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
    <h3>What's on your techy mind?</h3>
    </div>
  )
};

export default PostForm;
