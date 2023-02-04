import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const {
    labelClassName,
    title,
    type,
    inputClassName,
    idAttr,
    placeholder,
    value,
    onKeyDown,
    onChange,
  } = props;
  return (
    <>
      <label htmlFor={idAttr} className={labelClassName}>
        {title}
      </label>
      <input
        type={type}
        className={inputClassName}
        id={idAttr}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

Input.defaultProps = {
  labelClassName: "form-label",
  title: "",
  type: "text",
  inputClassName: "form-control",
  idAttr: "",
  placeholder: "",
  value: "",
  onChange: () => {},
  onKeyDown: () => {},
};

Input.propTypes = {
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  idAttr: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
