import React from "react";
import "./App.css";
import Presenter from "./components/presenter";
import data from "./data/base.yaml";

function App() {
  return (
    <main>
      <Presenter data={data} />
    </main>
  );
}

export default App;
