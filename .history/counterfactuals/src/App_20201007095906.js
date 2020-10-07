import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;
