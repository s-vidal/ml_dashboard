import React from "react";

const DataSetSelection = ({title, items}) => {
  return (
    <div>
      <div className="dropdown show">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title}
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {items.map((item) => {
            {
              //       /<a className="dropdown-item" href="#">
              //     Action
               </a> 
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DataSetSelection;