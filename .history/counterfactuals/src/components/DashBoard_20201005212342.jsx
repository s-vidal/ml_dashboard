import React, {useEffect, useState} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";
import Dropdown from "./Dropdown";

const DashBoard = () => {
  const [datasetNames, setDatasetNames] = useState([]);
  useEffect(() => {
    const dataHandler = new DataHandler();
    // const dataset = dataHandler.getDataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    const graph = dataHandler.getGraph();
    const sample = dataHandler.getSample();
    const datasetNames = dataHandler.getDataSetNames();
    setDatasetNames(datasetNames);
    console.log(datasetNames);
    console.log(featuresAndTagName);
    console.log(sample);
    console.log(graph);
  }, []);

  return (
    <div className=" container dashboard">
      <div className="">
        <div className="d-flex flex-row-reverse">
          <div className="close mr-3 mt-3"></div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <h1 className="text-secondary">Counterfactuals</h1>
      </div>
      <div className="row mt-5">
        <div className="offset-2">
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
    </div>
  );
};

export default DashBoard;