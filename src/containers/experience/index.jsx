import React from "react";
import PropTypes from "prop-types";
import { Title } from "./styles";
import { formatDate } from "../../lib/util";
import Detail from "../../components/detail";

const Heading = ({ title, company, location, date }) => (
  <Title>
    <span>
      {title} -{" "}
      <span className="text--subtle">
        {company} @ {location}
      </span>
    </span>
    <span />
    <span>
      {formatDate(date[0])} - {date[1] ? formatDate(date[1]) : "Present"}
    </span>
  </Title>
);

const Experience = ({ title, company, location, date, details }) => (
  <div>
    <Heading title={title} company={company} location={location} date={date} />
    <Detail details={details} />
  </div>
);

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.arrayOf(PropTypes.object).isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Experience;