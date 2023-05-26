import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import SearchEngine from "./SearchEngine.js";

function App() {
  return (
    <div className="App">
      <SearchEngine />

      <a href="https://github.com/ZoeSttn/my-reactapp">
        Github repository for this project{" "}
      </a>
    </div>
  );
}

export default App;
