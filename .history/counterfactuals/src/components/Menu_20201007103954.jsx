import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu mt-5 mb-5 shadow">
      <div className="container">
        <div className="row mt-5 ml-5">
          <img
            src={require("../img/deltika_logo_transparent.png")}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="sticky">
          <div className="list-menu">
            <ul className="nav flex-column fixed-top">
              <li className="nav-item text-secondary">
                <p>Section 1</p>
              </li>
              <li className="nav-item text-secondary ">
                <p>Section 2</p>
              </li>
              <li className="nav-item selected">
                <p className="selected">Counterfactuals</p>
              </li>
              <li className="nav-item text-secondary">
                <p>Section 4</p>
              </li>
              <li className="nav-item text-secondary">
                <p>Section 5</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
