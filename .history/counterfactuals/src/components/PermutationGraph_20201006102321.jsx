import React from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames}) => {
  console.log(featureNames);
  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row d-flex justify-content-center checkbox-bg">
        {featureNames["featuresNames"].map((feature, index) => (
          <span key={index} className="p-3">
            <input
              type="checkbox"
              id={feature}
              name={feature}
              value={feature}
              onClick={
                onFeatureClick(feature);
              }}
            ></input>
            <label className="pl-1" htmlFor="vehicle1">
              {feature}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PermutationGraph;
