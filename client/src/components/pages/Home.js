import React from "react";

export default function Home() {
  return (
    <div>
      <p>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div className="card" style={{ width: "18rem" }}></div>
              <div class="col-sm">
                <div class="d-flex p-2">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="/client/src/assets/images/TikTok.PNG"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <h2 class="text-center"> Star Rating</h2>
                      <ul class="text-center">
                        <li class="star">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </li>
                      </ul>
                      <div clas="rating text-center">Rated</div>
                      <button onclick="myFunction()">Click</button>

                      <a href="#" class="btn btn-primary background">
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
