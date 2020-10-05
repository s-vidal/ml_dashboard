import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  console.log(sampleData);
  return (
    <div className="container p-0">
      <div className="sample-container row d-flex justify-content-between align-items-center">
        <h6 className="ml-3 mr-3">Sample Data</h6>
        {/* {sampleData &&
          sampleData["features"].map((feature, index) => (
            <h6 className="p-2 m-2 feature" key={index}>
              {feature} : {sampleData[feature]}
            </h6>
          ))} */}
      </div>
    </div>
  );
};

export default SampleSection;
