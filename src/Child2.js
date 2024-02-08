import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  const select = useSelector((state) => state);
  console.log("SELECT", select);
  return <div></div>;
}

export default Child2;
