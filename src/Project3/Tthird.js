import React from "react";

export default function Tthird({ name }) {
  const Alert = () => {
    alert(name);
  };
  return (
    <div>
      <input type="text" value={name}></input>
      <button onClick={Alert}>Alert</button>
    </div>
  );
}
