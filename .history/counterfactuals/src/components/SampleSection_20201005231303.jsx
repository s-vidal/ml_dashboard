import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  return (
    <div className="container p-0">
      <div className="row sample-container p-4 pl-5">
        <h5 className="mb-4">Sample Data Features</h5>
        <div className="row d-flex justify-content-start align-items-center">
          {sampleData &&
            sampleData["features"].map((feature, index) => (
              <div className="m-2">
                <p className="p-2 pl-3 pr-3 feature" key={index}>
                  {Object.keys(feature)}
                </p>

                <p className="p-2 pl-3 pr-3 feature-value">
                  {Object.values(feature)}
                </p>
              </div>
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
