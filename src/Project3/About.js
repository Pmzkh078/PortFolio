import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div id="About" className="About1">
        <h1>About Me</h1>
      </div>
      <div className="About">
        <h2>
          Name: <b>Pratik Patel</b>
        </h2>
        <h2>
          City: <b>Ahemdabad</b>
        </h2>
        <h2>
          State: <b>Gujarat</b>
        </h2>
        <h2>
          Email: <b>patelpratikh98@gmail.com</b>
        </h2>
        <h2>
          Mobile: <b>9409476871</b>
        </h2>
        <p>
          'To be a part of an organization where I can fully utilize my skills
          and make a significant contribution to the success of the employer and
          at the same time my individual growth.'
        </p>
      </div>
    </div>
  );
};
export default About;
