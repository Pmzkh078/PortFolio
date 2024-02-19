import React from "react";
import Notecontext from "./Notecontext";
import CompA from "./CompA";

const Notestate = () => {
  const state = {
    "Name": "Pratik",
    "Class": "6b",
  };
  return <Notecontext.Provider value={state}><CompA/></Notecontext.Provider>;
};
export default Notestate;
