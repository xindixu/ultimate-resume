import React from "react";
import PropTypes from "prop-types";
import { Title } from "./styles";
import { formatDate } from "../../lib/util";
import Detail from "../../components/detail";

const Heading = ({ school, date }) => (
  <Title>
    <span>{school}</span>
    <span />
    <span>{formatDate(date)}</span>
  </Title>
);

const Education = ({ school, date, details }) => (
  <div>
    <Heading school={school} date={date} />
    <Detail details={details} />
  </div>
);

Education.propTypes = {
  school: PropTypes.string.isRequired,
  date: PropTypes.arrayOf(PropTypes.object).isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Education;
