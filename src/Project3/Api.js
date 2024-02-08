import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Api() {
  const [apiData, setApiData] = useState([]);
  async function Fetch() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setApiData(response.data);
  }
  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div>
      {apiData.map((val, index) => {
        return (
          <div key={val.id}>
            <h2>{val.id}</h2>
            <h2>{val.title}</h2>
            <h2>{val.completed}</h2>
          </div>
        );
      })}
    </div>
  );
}
