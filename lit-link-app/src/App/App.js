import './App.css';
import React, { useState, useEffect } from "react";
import Tree from "../Graph/tree";

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState('Click a character or a relationship to learn more.');

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

  function childTapped(description) {
    setDescription(description)
  }

  return (
    <div className="App">
      <h1 className='App-header'>Romeo and Juliet</h1>
      <h4 className='App-subtitle'>Play by William Shakespeare | 1597</h4>
      {isLoading && <p>Fetching data...</p>}
      {characterData && <Tree rootObj={characterData} childTapped={childTapped} currentDescription={description}></Tree>}
      <div className='App-descriptions'>{description}</div>
    </div>
  );
}

export default App;
