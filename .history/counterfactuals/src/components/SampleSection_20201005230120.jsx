import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  return (
    <div className="container p-0">
      <div className="row sample-container p-3 pl-5">
        <h6 className="">Sample Data</h6>
        <div className="row d-flex justify-content-start align-items-center">
          {sampleData &&
            sampleData["features"].map((feature, index) => (
              <h6 className="p-2 pl-3 pr-3 m-2 feature" key={index}>
                {Object.keys(feature)} : {Object.values(feature)}
              </h6>
            ))}
        </div>
        <div className="row">
          {sampleData &&
            sampleData["features"].map((feature, index) => (
              <h6 className="p-2 pl-3 pr-3 m-2 feature" key={index}>
                {Object.keys(feature)} : {Object.values(feature)}
              </h6>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SampleSection;