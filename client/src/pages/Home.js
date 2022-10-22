import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "../../src/App.css"
// import StarRating from "../components/StarRating"

export default function Home() {
  return (
    <div>
      <h1></h1>
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
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <h2 className="text-center"> Star Rating</h2>
                      <ul className="text-center">
                        {/* <li className="star">
                          <FontAwesomeIcon icon={solid("star")} />
                          <FontAwesomeIcon icon={solid("star")} />
                          <FontAwesomeIcon icon={solid("star")} />
                          <FontAwesomeIcon icon={solid("star")} />
                          <FontAwesomeIcon icon={solid("star")} />
                        </li> */}
                      </ul>
                      <div clas="rating text-center">Rated</div>
                      {/* <div> <StarRating /> </div> */}

                      <a href="#" className="btn btn-primary background">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}
