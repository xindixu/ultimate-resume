import React, { useState } from "react";
import "./App.css";
import Presenter from "./components/presenter";
import Editor from "./components/editor";
import dataJSON from "./data/base.yaml";
import { isResumeDataValid } from "./lib/util";

function App() {
  const [resumeJSON, setResumeJSON] = useState(dataJSON);

  return (
    <main className="flex">
      <Presenter
        resumeJSON={resumeJSON}
        validate={data => isResumeDataValid(data)}
      />
      <Editor resumeJSON={resumeJSON} setResumeJSON={setResumeJSON} />
    </main>
  );
}

export default App;
