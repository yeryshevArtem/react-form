/* eslint-disable no-undef */
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import InputMask from "../common/components/InputMask";
import locize from "../localization/main";
import useStyles from "./taxIdentifierInput.styles";

const countriesConfig = {
  usa: {
    key: "usa",
    pattern: "0000-aaaa-00000[00]",
    placeholder: "[0000]-[AAA]-[00000(00)]",
  },
  canada: {
    key: "canada",
    pattern: [
      {
        mask: "0000000000-aa",
      },
      {
        mask: "S-N",
        blocks: {
          S: {
            mask: IMask.MaskedEnum,
            enum: ["A", "B", "D"],
          },
          N: {
            mask: "aa",
          },
        },
      },
    ],
    placeholder: "[0000000000 or 'A' or 'B' or 'D']-[AA]",
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

function TaxIdentifierInput({ idAttr, taxIdValue, handleChangeTaxId }) {
  const classes = useStyles();
  const [selectedCountry, setSelected] = useState("usa");

  const handleSelect = useCallback((event) => {
    event.preventDefault();
    const { countryVal } = event.target.dataset;
    setSelected(countryVal);
    handleChangeTaxId("");
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
        value={taxIdValue}
        onChange={handleChangeTaxId}
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
  taxIdValue: PropTypes.string.isRequired,
  handleChangeTaxId: PropTypes.func.isRequired,
};

export default TaxIdentifierInput;
