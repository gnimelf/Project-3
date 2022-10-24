import React from "react";
import { Link } from "react-router-dom";
//import StarRating from "../components/StarRating"

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} >
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}></div>
                <div className="col-sm">
                  <div className="d-flex p-2">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={post.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 >{post.title}</h5>
                        <p >{post.username}</p>
                        <p >{post.description}</p>
                        <a href={post.url}>Link</a>
                        <Link className="btn btn-primary btn-block btn-squared"
                          to={`/post/${post._id}`}
                        >
                          Join the discussion on this thought.
                        </Link>
                        {/* <div> <StarRating /> </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
