import React from "react";
import PropTypes from "prop-types";

const TYPES = {
  primary: "primary",
  secondary: "secondary",
};

function Button(props) {
  const { children, elementType, type, onClick } = props;
  return (
    <button type={elementType} className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  elementType: "button",
  type: "primary",
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  elementType: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  onClick: PropTypes.func,
};

export default Button;
