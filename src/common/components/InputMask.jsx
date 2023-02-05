import React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";

function InputMask(props) {
  const {
    labelClassName,
    title,
    inputClassName,
    idAttr,
    onChange,
    showLabel,
    config,
    value,
    required,
  } = props;

  return (
    <>
      {showLabel && (
        <label htmlFor={idAttr} className={labelClassName}>
          {title}
        </label>
      )}
      <IMaskInput
        required={required}
        className={inputClassName}
        mask={config.pattern}
        onAccept={onChange}
        placeholder={config.placeholder}
        value={value}
      />
    </>
  );
}

InputMask.defaultProps = {
  labelClassName: "form-label",
  title: "",
  inputClassName: "form-control",
  idAttr: "",
  placeholder: "",
  showLabel: true,
  value: "",
  required: false,
};

InputMask.propTypes = {
  required: PropTypes.bool,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  inputClassName: PropTypes.string,
  idAttr: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  showLabel: PropTypes.bool,
  config: PropTypes.shape({
    key: PropTypes.string,
    pattern: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          mask: PropTypes.string,
          blocks: PropTypes.shape({}),
        })
      ),
    ]),
    placeholder: PropTypes.string,
  }).isRequired,
};

export default InputMask;
