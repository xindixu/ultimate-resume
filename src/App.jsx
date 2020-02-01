import React, { useState } from "react";
import "./App.css";
import Presenter from "./components/presenter";
import Editor from "./components/editor";
import dataJSON from "./data/base.yaml";
import { isResumeDataValid } from "./lib/util";
import { Wrapper } from "./styles";

function App() {
  const [resumeJSON, setResumeJSON] = useState(dataJSON);

  return (
    <Wrapper>
      <Presenter
        resumeJSON={resumeJSON}
        validate={data => isResumeDataValid(data)}
      />
      <Editor resumeJSON={resumeJSON} setResumeJSON={setResumeJSON} />
    </Wrapper>
  );
}

export default App;
