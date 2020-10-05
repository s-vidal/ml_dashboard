import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  console.log(sampleData);
  return (
    <div className="container p-0">
      <div className="sample-container row d-flex justify-content-between align-items-center">
        <h6 className="ml-2">Sample Data</h6>
        {sampleData && sampleData.map(feature=>())}
      </div>
    </div>
  );
};

export default SampleSection;
