import React from "react";
import "../../src/App.css";
import CardList from "../components/CardList/index";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/Queries';
//import StarRating from "../components/StarRating"

export default function Home() {

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <div className="col-12 col-md-8 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardList posts={posts}/>
      )}
    </div>
  );
}
