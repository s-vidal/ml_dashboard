import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  return (
    <div className="container p-0">
      <div className="sample-container row d-flex justify-content-between align-items-center">
        <h6 className="ml-3 mr-3">Sample Data</h6>
        {sampleData &&
          sampleData["features"].map((feature, index) => (
            <h6 className="p-2 pl-3 pr-2 m-2 feature" key={index}>
              {Object.keys(feature)} : {Object.values(feature)}
            </h6>
          ))}
        {sampleData &&
          sampleData["target"].map((target, index) => (
            <h6 className="p-2 m-2 target" key={index}>
              {Object.keys(target)} : {Object.values(target)}
            </h6>
          ))}
      </div>
    </div>
  );
};

export default SampleSection;
