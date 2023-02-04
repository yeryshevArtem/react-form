import React from "react";
import PropTypes from "prop-types";

function Panel(props) {
  const { filtered, onClick, active } = props;
  return (
    <ul className="list-group">
      {filtered.map((suggestion, index) => {
        let className;
        if (index === active) {
          className = "active";
        }
        return (
          <li
            className={`${className} list-group-item`}
            key={suggestion}
            onClick={onClick}
          >
            {suggestion}
          </li>
        );
      })}
    </ul>
  );
}

Panel.defaultProps = {
  onClick: () => {},
  filtered: [],
};

Panel.propTypes = {
  onClick: PropTypes.func,
  filtered: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.number.isRequired,
};

export default Panel;
