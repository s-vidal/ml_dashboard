import React from "react";
import {useEffect} from "react";
import "./ActionableInsigth.css";

const ActionableInsigth = (dataHandler) => {
  useEffect(() => {dataHandler});
  return (
    <div>
      <div className="container insights-container">
        <div className="row pt-5 pl-5 pr-5 m-0">
          <h5 className="mb-4">Actionable Insights</h5>
        </div>
        <div className="row">
          <div className="ml-5 col-9 mb-5">
            <p className="text-secondary">
              Recommendations derived from the model
            </p>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default ActionableInsigth;
