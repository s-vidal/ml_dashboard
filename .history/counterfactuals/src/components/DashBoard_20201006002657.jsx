import React, {useEffect, useState} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";
import Dropdown from "./Dropdown";
import SampleSection from "./SampleSection";

const DashBoard = () => {
  const [datasetNames, setDatasetNames] = useState([]);
  const [sampleData, setSampleData] = useState();

  useEffect(() => {
    const dataHandler = new DataHandler(1);
    // const dataset = dataHandler.getDataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    const graph = dataHandler.getGraph();
    const sample = dataHandler.getSample();
    setSampleData(sample);
    const datasetNames = dataHandler.getDataSetNames();
    setDatasetNames(datasetNames);
    console.log(datasetNames);
    console.log(featuresAndTagName);
    console.log(graph);
  }, []);

  return (
    <div className=" container dashboard">
      <div className="">
        <div className="d-flex flex-row-reverse">
          <div className="close mr-3 mt-3 d-flex justify-content-center mt-1">
            <h4>✕</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="offset-1 mb-3 mt-3 text-secondary">Counterfactuals</h3>
      </div>
      <div className="row mt-5">
        <div className="offset-1">
          {datasetNames && (
            <Dropdown
              title="Select Dataset"
              items={datasetNames}
              setItem={(item) => {
                console.log(item);
              }}
            />
          )}
        </div>
      </div>
      {sampleData && (
        <div className="row d-flex justify-content-center">
          <div className="col-10 mt-5">
            <SampleSection sampleData={sampleData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;