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
    required,
    minlength,
    pattern,
  } = props;
  return (
    <>
      <label htmlFor={idAttr} className={labelClassName}>
        {title}
      </label>
      <input
        minLength={minlength}
        required={required}
        type={type}
        className={inputClassName}
        id={idAttr}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern || undefined}
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
  required: false,
  minlength: 0,
  pattern: undefined,
};

Input.propTypes = {
  minlength: PropTypes.number,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  idAttr: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  pattern: PropTypes.oneOfType(PropTypes.string, undefined),
};

export default Input;
