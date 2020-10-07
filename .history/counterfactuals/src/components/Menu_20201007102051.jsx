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
        <div className="mt-5">
          <ul class="nav flex-column">
            <li class="nav-item">
             
                Active
        
            </li>
            <li class="nav-item">
       
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
