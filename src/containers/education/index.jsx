import React from "react";
import PropTypes from "prop-types";

import { formatDate } from "../../lib/util";
import Detail from "../../components/detail";

const Heading = ({ school, date }) => (
  <h3>
    <span>{school}</span>
    <span />
    <span>{formatDate(date)}</span>
  </h3>
);

const Education = ({ school, date, details }) => (
  <div>
    <Heading school={school} date={date} />
    <Detail details={details} />
  </div>
);

Education.propTypes = {
  school: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Education;
