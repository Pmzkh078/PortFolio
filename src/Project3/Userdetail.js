import { useParams } from "react-router-dom";
import React from "react";

function Userdetail() {
  const { id } = useParams();

  return (
    <div>
      <p>Hi{id}</p>
    </div>
  );
}

export default Userdetail;
