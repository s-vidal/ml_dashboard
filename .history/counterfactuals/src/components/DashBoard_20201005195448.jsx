import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    const dataset = dataHandler.getdataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    const graph = dataHandler.getGraph();
    const sample = dataHandler.getSample();
    console.log(featuresAndTagName);
    console.log(sample);
    console.log(graph);
  }, []);

  return <div></div>;
};

export default DashBoard;
