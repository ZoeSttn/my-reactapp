import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import SearchEngine from "./SearchEngine.js";
import "./App.css";

function App() {
  return (
    <div className="App mt-5">
      <SearchEngine />
      <br />
      <a
        className="repositoryLink"
        href="https://github.com/ZoeSttn/my-reactapp"
      >
        Github repository for this project{" "}
      </a>
    </div>
  );
}

export default App;
