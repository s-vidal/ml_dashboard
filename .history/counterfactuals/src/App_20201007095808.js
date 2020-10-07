import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="con">
        <Menu />
      </div>
      <div className="container p-0">
        <div className="mt-5">
          <DashBoard />
        </div>
      </div>
    </>
  );
}

export default App;
