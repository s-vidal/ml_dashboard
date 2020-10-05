import React from "react";
import "./Dropdown.css";

const Dropdown = ({title, items, setItem}) => {
  return (
    <div>
      <div className="dropdown  show">
        <button
          className="btn btn-secondary dropdown-toggle rounded"
          type="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title}
        </button>

        <div className="dropdown-menu rounded" aria-labelledby="dropdownMenuLink">
          {items.map((item) => (
            <a
              key={item}
              href=""
              className="dropdown-item"
              onClick={() => {
                setItem(item);
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
