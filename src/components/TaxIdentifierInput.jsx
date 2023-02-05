import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import InputMask from "../common/components/InputMask";
import locize from "../localization/main";
import useStyles from "./taxIdentifierInput.styles";

const countriesConfig = {
  usa: {
    key: "usa",
    pattern: "0000-aaaa-0000000",
    placeholder: "[0000]-[AAA]-[00000(00)]",
  },
  canada: {
    key: "canada",
    pattern: "0000-00-00",
    placeholder: "[0000000000 or 'A','B','D']-[AA]",
  },
};

function renderCountryList(countries, handler) {
  return countries.map((country) => (
    <li key={country}>
      <a
        className="dropdown-item"
        href="#"
        onClick={handler}
        data-country-val={country}
      >
        {locize.get(country)}
      </a>
    </li>
  ));
}

function TaxIdentifierInput({ idAttr }) {
  const classes = useStyles();
  const [selectedCountry, setSelected] = useState("usa");

  const [tax, setTax] = useState("");

  const handleChange = (val) => {
    setTax(val);
  };

  const handleSelect = useCallback((event) => {
    event.preventDefault();
    const { countryVal } = event.target.dataset;
    setSelected(countryVal);
    setTax("");
  });

  return (
    <div className={`${classes.gutterMedium} input-group`}>
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {locize.get("country")}
      </button>

      <ul className="dropdown-menu">
        {renderCountryList(Object.keys(countriesConfig), handleSelect)}
      </ul>

      <InputMask
        showLabel={false}
        title={locize.get("taxIdentifier")}
        inputClassName="form-control"
        config={countriesConfig[selectedCountry]}
        value={tax}
        onChange={handleChange}
        idAttr={idAttr}
      />
    </div>
  );
}

TaxIdentifierInput.defaultProps = {
  idAttr: "",
};

TaxIdentifierInput.propTypes = {
  idAttr: PropTypes.string,
};

export default TaxIdentifierInput;
