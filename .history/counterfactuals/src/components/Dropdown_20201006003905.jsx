import React from "react";
import "./Dropdown.css";

const Dropdown = ({title, items, setItem}) => {
  return (
    <div>
      <div className="dropdown show">
        <button
          className="btn btn-outline-secondary dropdown-toggle custom-dropdown"
          type="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="pl-3 pr-3">{title}</span>
        </button>

        <div
          className="dropdown-menu rounded mt-2 ml-2"
          aria-labelledby="dropdownMenuLink"
        >
          {items.map((item, index) => (
            <a
              key={item}
              className="dropdown-item pointer"
              onClick={() => {
                setItem(index + 1);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
