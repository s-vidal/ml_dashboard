import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  return (
    <div className="container p-0">
      <div className="sample-container">
        <h6 className="ml-3 mr-3">Sample Data</h6>
        div.d-flex.justify-content-center.align-items-center
        {sampleData &&
          sampleData["features"].map((feature, index) => (
            <h6 className="p-2 pl-3 pr-3 m-2 feature" key={index}>
              {Object.keys(feature)} : {Object.values(feature)}
            </h6>
          ))}
      </div>
    </div>
  );
};

export default SampleSection;
