import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }
  return (
    <div>
      {posts.map((post) => (
        <p>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}></div>
                <div className="col-sm">
                  <div className="d-flex p-2">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src="/assets/images/TikTok.PNG"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <h2 className="text-center">{post.stars}</h2>
                        <Link
                          className="btn btn-primary btn-block btn-squared"
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
        </p>
      ))}
    </div>
  );
};

export default CardList;
