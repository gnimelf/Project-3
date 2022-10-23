import React from "react";
import "../../src/App.css";
import PostList from "../components/PostList";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/Queries';


export default function Home() {

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <div className="col-12 col-md-8 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts}/>
      )}
    </div>
  );
}
