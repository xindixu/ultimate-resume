import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../lib/util";
import Detail from "../../components/detail";

const Heading = ({ title, tech, date }) => (
  <h3>
    <span>
      {title} - <span className="text--subtle">{tech.join(", ")}</span>
    </span>
    <span />
    <span>
      {formatDate(date[0])} - {date[1] ? formatDate(date[1]) : "Present"}
    </span>
  </h3>
);

const Project = ({ title, tech, date, details }) => (
  <div>
    <Heading title={title} tech={tech} date={date} />
    <Detail details={details} />
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.arrayOf(PropTypes.object).isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Project;
