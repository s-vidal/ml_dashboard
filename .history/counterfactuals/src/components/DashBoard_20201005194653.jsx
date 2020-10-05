import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    const dataset = dataHandler.getdataset(1);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    console.log(featuresAndTagName);
    const graph = 
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
