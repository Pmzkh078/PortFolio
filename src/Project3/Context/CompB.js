import React, { useContext } from "react";
import { NoteContext2 } from "../../App";

const CompB = () => {
  const { appColor, getDay } = useContext(NoteContext2);
  const day = "sunday";
  return (
    <div style={{ color: appColor }}>
      First Component is {appColor}
      <div>
        <button onClick={() => getDay(day)}>Change</button>
      </div>
    </div>
  );
};
export default CompB;
