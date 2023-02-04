import React from "react";
import PropTypes from "prop-types";

const TYPES = {
  error: "alert-danger",
  success: "alert-success",
};

function Alert(props) {
  const { message, type, onClose } = props;
  const computedClass = `${TYPES[type]} alert fade show alert-dismissible`;
  return (
    <div className={computedClass} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
}

Alert.defaultProps = {
  type: "success",
  onClose: () => {},
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success"]),
  onClose: PropTypes.func,
};

export default Alert;
