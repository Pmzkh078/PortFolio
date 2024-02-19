import React, { useContext } from "react";
import Notecontext from "./Notecontext";
const CompA = () => {
  const a = useContext(Notecontext);
  return (
    <div>
      My name is {a.Name}
    </div>
  );
};
export default CompA;
