import './App.css';
import React, { useState, useEffect } from "react";
import Tree from "../Graph/tree";

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/get_characters?act_number=1", {
          method: "GET",
          mode: "cors",
        }
        );
        console.log(response);

        const data = await response.json();
        setCharacterData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Fetching data...</p>}
      {characterData && <Tree rootObj={characterData}></Tree>}
    </div>
  );
}

export default App;
