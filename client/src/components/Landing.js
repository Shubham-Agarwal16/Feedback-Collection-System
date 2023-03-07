import React from "react";

const Landing = () => {
  return (
    <div className="hero-body" style={{ padding: "10px" }}>
      <div className="column">
        <span
          className="title is-2 has-text-weight-bold"
          style={{
            fontSize: "50px",
            fontFamily: "Gloock",
            display: "table",
            margin: "0 auto",
          }}
        >
          Emaily
        </span>
      </div>
      <div className="columns">
        <div className="column">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <p style={{ fontFamily: "Permanent Marker", fontSize: "2.9rem" }}>
            Feedback Collection System
          </p>
          <br />
          <p style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
            Your one stop solution for collecting feedback from your users
          </p>
          <br />
          <div className="buttons">
            <div className="button" style={{ padding: "0px" }}>
              <a
                href="/auth/google"
                className="button is-black has-text-weight-semibold has-text-white Ubuntu"
              >
                Login With Google
              </a>
            </div>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
        <div className="column">
          <div className="column"></div>
          <div className="column"></div>
          <img
            className=""
            src="/landing-6.jpg"
            alt="landing image"
            style={{
              height: "600px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
/* <img
          className="column is-three-fifths is-offset-one-fifth image"
          src="/landing-6.jpg"
          alt="landing image"
        /> */
