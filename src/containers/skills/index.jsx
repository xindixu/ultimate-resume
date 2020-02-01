import React from "react";
import PropTypes from "prop-types";
import Detail from "../../components/detail";

const Skills = ({ skills }) => (
  <Detail
    details={skills.map(({ category, details }) => (
      <>
        <span className="text--title_case m-r-base bold">{category}</span>
        {details}
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
