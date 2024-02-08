import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "./redux/slices/messageSlice";

function Child1() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setMessage(data));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default Child1;
