import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center p-0">
          <Menu />
          <div className=" p-0">
            <div className="mt-5">
              <DashBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;