import { useParams } from "react-router-dom";
import React from "react";

function Userdetail() {
  const params = useParams();
  console.log(params, "?????");

  return (
    <div>
      <p>Hi {params.id}</p>
    </div>
  );
}

export default Userdetail;
