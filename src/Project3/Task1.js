import React, { useState } from "react";

export default function Task1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [displayEmail, setdisplayEmail] = useState("");
  const [displayNumber, setdisplayNumber] = useState("");
  const [displayAddress, setdisplayAddress] = useState("");

  function handleChange1(e) {
    setName(e.target.value);
  }
  function handleChange2(e) {
    setEmail(e.target.value);
  }
  function handleChange3(e) {
    setNumber(e.target.value);
  }
  function handleChange4(e) {
    setAddress(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted");
    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
    setdisplayName(name);
    setdisplayEmail(email);
    setdisplayNumber(number);
    setdisplayAddress(address);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange1}
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={handleChange2}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="number"
          value={number}
          onChange={handleChange3}
          placeholder="Number"
          required
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={handleChange4}
          placeholder="Address"
          required
        />
        <br />
        {displayName}
        <br />
        {displayEmail}
        <br />
        {displayNumber}
        <br />
        {displayAddress}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
