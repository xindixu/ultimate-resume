import React, { useState } from "react";
import "./App.css";
import jsyaml from "js-yaml";
import Presenter from "./components/presenter";
import Editor from "./components/editor";
import dataJSON from "./data/base.yaml";
import { isResumeDataValid } from "./lib/util";

function App() {
  const [resumeJSON, setResumeJSON] = useState(dataJSON);
  console.log(isResumeDataValid(resumeJSON));
  return (
    <main className="flex">
      <Presenter resumeJSON={resumeJSON} />
      <Editor resumeJSON={resumeJSON} setResumeJSON={setResumeJSON} />
    </main>
  );
}

export default App;
