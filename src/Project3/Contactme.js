import React from "react";
import "./Contact.css";
const Contactme = () => {
  function Contact1() {
    alert("Your Response Has Been Submitted");
  }
  return (
    <div>
      <div id="Contact" className="Contact1" style={{ fontSize: "45px" }}>
        Contact Me
      </div>
      <div className="Contact">
        <table>
          <tr>
            <td>
              <input type="text" placeholder="Name"></input>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <input type="text" placeholder="Email"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Mobile No"></input>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" onClick={Contact1}>
                Send
              </button>
              <br></br>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Contactme;
