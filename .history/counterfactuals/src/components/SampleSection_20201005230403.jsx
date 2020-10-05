import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  return (
    <div className="container p-0">
      <div className="row sample-container p-5 pr-0">
        <h5 className="mb-5">Sample Data Features</h5>
        <div className="row d-flex justify-content-start align-items-center">
          {sampleData &&
            sampleData["features"].map((feature, index) => (
              <h6 className="p-2 pl-3 pr-3 m-2 feature" key={index}>
                {Object.keys(feature)} : {Object.values(feature)}
              </h6>
            ))}
          {sampleData &&
            sampleData["target"].map((target, index) => (
              <h6 className="p-2 pl-3 pr-3 m-2 target" key={index}>
                {Object.keys(target)} : {Object.values(target)}
              </h6>
            ))}
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default SampleSection;
