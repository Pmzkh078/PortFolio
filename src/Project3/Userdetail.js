import { useParams } from "react-router-dom";
import React from "react";

function Userdetail() {
  const { id } = useParams();

  return (
    <div>
      <p style={{ marginTop: "20%" }}>Hi {id}</p>
    </div>
  );
}

export default Userdetail;
