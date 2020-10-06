import React from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames}) => {
  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row">
          {featureNames["featureNames"]}
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label for="vehicle1"> I have a bike</label>
      </div>
    </div>
  );
};

export default PermutationGraph;
