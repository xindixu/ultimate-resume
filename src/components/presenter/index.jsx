import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Left, Right } from "./styles";
import { LetterSize } from "../styled";
import { randomId } from "../../lib/util";
import Experience from "../../containers/experience";
import Project from "../../containers/project";
import Education from "../../containers/education";
import Skills from "../../containers/skills";
import Header from "../../containers/header";

const Presenter = ({ resumeJSON, validate }) => {
  const { header, experience, education, projects, skills } = resumeJSON;

  return (
    <LetterSize className="presenter">
      <Wrapper>
        {validate(resumeJSON) ? (
          <>
            <Left>
              <Header header={header} />
              <section>
                <h2>Education</h2>
                {education.map(item => (
                  <Education key={randomId()} {...item} />
                ))}
              </section>
              <section>
                <h2>Skills</h2>
                <Skills skills={skills} />
              </section>
            </Left>
            <Right>
              <section>
                <h2>Experience</h2>
                {experience.map(item => (
                  <Experience key={randomId()} {...item} />
                ))}
              </section>

              <section>
                <h2>Projects</h2>
                {projects.map(item => (
                  <Project key={randomId()} {...item} />
                ))}
              </section>
            </Right>
          </>
        ) : (
          <p>Oops, something is wrong with your input</p>
        )}
      </Wrapper>
    </LetterSize>
  );
};

Presenter.propTypes = {
  resumeJSON: PropTypes.object.isRequired,
  validate: PropTypes.func.isRequired
};

export default Presenter;
