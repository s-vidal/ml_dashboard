import React from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames, onFeatureClick}) => {
  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row  checkbox-bg">
        <d className="col-8 d-flex justify-content-center">
          {featureNames["featuresNames"].map((feature, index) => (
            <span key={index} className="pt-3 pl-4 pr-4">
              <input
                type="checkbox"
                id={feature}
                name={feature}
                value={feature}
                onClick={() => onFeatureClick(feature)}
              ></input>
              <label className="pl-1" htmlFor="vehicle1">
                {feature}
              </label>
            </span>
          ))}
        </d>
      </div>
    </div>
  );
};

export default PermutationGraph;
