import React from "react";
import PropTypes from "prop-types";

function Layout(props) {
  const { size, children } = props;
  return <div className={`mb-${size}`}>{children}</div>;
}

Layout.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
