import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header, Left, Right } from "./styles";
import { LetterSize } from "../styled";
import { randomId } from "../../lib/util";
import Experience from "../../containers/experience";
import Project from "../../containers/project";
import Education from "../../containers/education";
import Detail from "../detail";

const Presenter = ({ resumeJSON }) => {
  const { header, experience, education, projects, skills } = resumeJSON;
  const { name, location, phone, links } = header;

  return (
    <LetterSize>
      <Wrapper>
        <Left>
          <Header>
            <h1>{name}</h1>
            <p>{location}</p>
            <p>{phone}</p>
            {links.map(({ link, text }, index) => (
              <p key={index}>
                <a href={link}>{text}</a>
              </p>
            ))}
          </Header>
          <section>
            <h2>Education</h2>
            {education.map(item => (
              <Education key={randomId()} {...item} />
            ))}
          </section>
          <section>
            <h2>Skills</h2>
            <Detail
              details={Object.keys(skills).map(key => (
                <>
                  <span className="text--title_case m-r-base">{key}</span>
                  {skills[key]}
                </>
              ))}
            />
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
      </Wrapper>
    </LetterSize>
  );
};

Presenter.propTypes = {
  resumeJSON: PropTypes.object.isRequired
};

export default Presenter;
