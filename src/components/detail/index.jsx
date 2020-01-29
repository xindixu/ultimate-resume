import React from "react";
import PropTypes from "prop-types";
import { Content } from "./styles";

const Detail = ({ details }) => (
  <Content>
    <ul>
      {details.map((list, index) => (
        <li key={index}>{list}</li>
      ))}
    </ul>
  </Content>
);

Detail.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ).isRequired
};

export default Detail;
