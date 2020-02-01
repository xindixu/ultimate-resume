import React from "react";
import PropTypes from "prop-types";

const Detail = ({ details }) => (
  <ul>
    {details.map((list, index) => (
      <li key={index}>{list}</li>
    ))}
  </ul>
);

Detail.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ).isRequired
};

export default Detail;
