import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu mt-5 mb-5 shadow">
      <div className="container">
        <div className="row mt-2">
          <img
            src={require("../img/deltika_logo_transparent.png")}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
