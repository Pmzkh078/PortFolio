import React from "react";
import "./Home.css";
import { useParams } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div id="Home" className="Home">
        <div className="Home1">
          <h1 style={{ fontSize: "70px", marginTop: "160px" }}>Pratik Patel</h1>
          <h5>i'm Passionate Front-end-Developer</h5>
          <button>
            <b>My Resume</b>
          </button>
        </div>
      </div>
    </div>
  );
}
