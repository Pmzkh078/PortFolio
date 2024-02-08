import React, { useEffect, useState } from "react";
const Task2 = () => {
  const [plus, setPlus] = useState(0);

  function Plus() {
    console.log("plus");
  }

  useEffect(() => {
    Plus();
  }, []);

  return (
    <div>
      {plus}
      <button onClick={() => setPlus(plus + 1)}>plus</button>
    </div>
  );
};
export default Task2;
