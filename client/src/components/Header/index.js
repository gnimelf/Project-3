import React from "react";
import img from "../../assets/images/TikTok.PNG";
import Container from "../Container"



export default function Header() {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <div class="container text-center flex">
          <div class="row align-items-start">
            <div class="col-2">
              <div className="card" style={{ width: "12rem" }}>
                <img src={img} />
              </div>
            </div>
            <div class="col-10">
              <h1 className="m-0" style={{ fontSize: "3rem" }}>
                Tik Tok Product Reviews
              </h1>
              <p
                className="m-0"
                style={{ fontSize: "1.75rem", fontWeight: "700" }}
              >
                Reviews That You Can Trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container />
    </header>
  );
}

module.export = Header;
