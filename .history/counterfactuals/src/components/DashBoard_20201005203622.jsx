import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    // const dataset = dataHandler.getdataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    const graph = dataHandler.getGraph();
    const sample = dataHandler.getSample();
    console.log(featuresAndTagName);
    console.log(sample);
    console.log(graph);
  }, []);

  return (
    <div className="dashboard">
      <div className="row d-flex flex-row-reverse">
        <div className="close mr-3 mt-5"></div>
      </div>
    </div>
  );
};

export default DashBoard;
