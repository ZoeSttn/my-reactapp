import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Heading from "./Heading.js";
import SearchEngine from "./SearchEngine.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
