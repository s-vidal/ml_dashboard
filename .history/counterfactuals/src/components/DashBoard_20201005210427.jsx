import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";
import Dropdown from "./Dropdown";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    // const dataset = dataHandler.getDataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    const graph = dataHandler.getGraph();
    const sample = dataHandler.getSample();
    const datasetNames = dataHandler.getDataSetNames();
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
      <div className="row">
        <Dropdown title="/>
      </div>
    </div>
  );
};

export default DashBoard;
