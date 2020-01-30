import React from "react";
import PropTypes from "prop-types";
import { Title } from "./styles";
import { formatDate } from "../../lib/util";
import Detail from "../../components/detail";

const Heading = ({ title, tech, location, date }) => (
  <Title>
    <span>
      {title} - <span className="text--subtle">{tech.join(", ")}</span>
    </span>
    <span />
    <span>
      {formatDate(date[0])} - {date[1] ? formatDate(date[1]) : "Present"}
    </span>
  </Title>
);

const Project = ({ title, tech, location, date, details }) => (
  <div>
    <Heading title={title} tech={tech} location={location} date={date} />
    <Detail details={details} />
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.arrayOf(PropTypes.object).isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Project;
