import React from "react";
import "../../src/App.css"
 import StarRating from "../components/StarRating"

export default function Home() {
  return (
    <div>
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
                      <h5 className="card-title">Product Name:</h5>
                      <p className="card-text">
                        Product Review:
                      </p>
                      <ul className="text-center">
                      </ul>
                      <div clas="rating text-center">Rated</div>
                      <div> <StarRating /> </div>
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
