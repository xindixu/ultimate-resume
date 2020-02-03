import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";

const Header = ({ header }) => {
  const { name, location, phone, links } = header;

  return (
    <header>
      <img src={logo} alt={name} />
      <p>
        {location} | {phone}
      </p>
      {links.map(({ link, text }, index) => (
        <p key={index}>
          <a href={link}>{text}</a>
        </p>
      ))}
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default Header;
