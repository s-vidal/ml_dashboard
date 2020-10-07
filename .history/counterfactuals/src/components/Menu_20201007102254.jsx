import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu mt-5 mb-5 shadow">
      <div className="container">
        <div className="row mt-3 ml-2">
          <img
            src={require("../img/deltika_logo_transparent.png")}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="list-men">
          <ul class="nav flex-column">
            <li class="nav-item">
              <p>Section 1</p>
            </li>
            <li class="nav-item">
              <p>Section 2</p>
            </li>
            <li class="nav-item">
              <p>Counterfactuals</p>
            </li>
            <li class="nav-item">
              <p>Section 4</p>
            </li>
            <li class="nav-item">
              <p>Section 5</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
