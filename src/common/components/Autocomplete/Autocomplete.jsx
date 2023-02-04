import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Panel from "./Panel";
import locize from "../../../localization/main";

function Autocomplete(props) {
  const { title, placeholder } = props;
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const { suggestions } = props;
    const inputValue = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
    return null;
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return <Panel onClick={onClick} filtered={filtered} active={active} />;
      }
      return (
        <div className="no-autocomplete">
          <em>{locize.get("notFound")}</em>
        </div>
      );
    }
    return <></>;
  };

  return (
    <>
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        title={title}
        placeholder={placeholder}
      />
      {renderAutocomplete()}
    </>
  );
}

Autocomplete.defaultProps = {
  title: "",
  placeholder: "",
};

Autocomplete.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Autocomplete;
