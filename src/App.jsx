import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "./utils/api";
function App() {
  
  const apiTesting = () => {
    fetchDataFromAPI("/movie/popular").then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div className="App">App</div>;
}

export default App;
