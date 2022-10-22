import React from "react";
 //import Container from "../Container"

export default function Header() {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <div className="container text-center flex">
          <div className="row align-items-start">
            <div className="col-2">
              <div className="card" style={{ width: "12rem" }}>
                <img src={"/assets/images/TikTok.PNG"} />
              </div>
            </div>
            <div className="col-10">
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
    </header>
  );
}

module.export = Header;
