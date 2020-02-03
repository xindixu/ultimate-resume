import React from "react";
import PropTypes from "prop-types";
import { dump, load } from "js-yaml";
import { Wrapper } from "./styles";
import { LetterSize } from "../styled";

const Editor = ({ resumeJSON, setResumeJSON }) => {
  const onChange = text => {
    const json = load(text);
    setResumeJSON(json);
  };
  return (
    <LetterSize>
      <Wrapper
        className="code"
        onChange={event => onChange(event.target.value)}
        value={dump(resumeJSON)}
      />
    </LetterSize>
  );
};
Editor.propTypes = {
  resumeJSON: PropTypes.object.isRequired,
  setResumeJSON: PropTypes.func.isRequired
};
export default Editor;
