import React from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames}) => {
  console.log(featureNames["featuresNames"]);
  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
    </div>
  );
};

export default PermutationGraph;
