import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  console.log(sampleData);
  return (
    <div className="container p-0">
      <div className="sample-container d-flex flex-row">
        <h6 className="ml-2">Sample Data</h6>
        {sampleData &&
          Object.keys(sampleData).map((feature, index) => (
            <h6 className="p-2 m-2 feature" key={index}>
              {feature} : {sampleData[feature]}
            </h6>
          ))}
      </div>
    </div>
  );
};

export default SampleSection;