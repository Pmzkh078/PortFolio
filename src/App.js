import { createContext, useState } from "react";
import "./App.css";
// import Notestate from "./Project3/Context/Notestate";
import CompB from "./Project3/Context/CompB";

// import Reactrouter from "./Project3/Reactrouter";

// import Task2 from "./Project3/Task2";
// import Tfirst from "./Project3/Tfirst";
// import Website from "./Project3/Website";

// import Task1 from "./Project3/Task1";
// import Api from "./Project3/Api";
export const NoteContext2 = createContext();
function App() {
  const [color, setColor] = useState("green");
  const [day, setDay] = useState("Monday");
  const getDay = (item) => {
    setDay(item);
  };
  return (
    <div className="App">
      {/* <Website/> */}

      {/* <Tfirst name="Pratik" /> */}
      {/* <Task2 /> */}
      {/* <Task1 /> */}
      {/* <Api /> */}

      {/* <Reactrouter /> */}
      {/* <Notestate/> */}
      <NoteContext2.Provider value={{ appColor: color, getDay: getDay }}>
        <h1>Today is {day}</h1>
        <CompB />
      </NoteContext2.Provider>
    </div>
  );
}

export default App;
