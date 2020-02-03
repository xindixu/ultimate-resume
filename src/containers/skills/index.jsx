import React from "react";
import PropTypes from "prop-types";
import Detail from "../../components/detail";

const Skills = ({ skills }) => (
  <Detail
    details={skills.map(({ category, details }) => (
      <>
        <span className="text--title_case bold">{category}</span> <br />
        <span>{details}</span>
      </>
    ))}
  />
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Skills;
