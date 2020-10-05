import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    const dataset = dataHandler.getdataset(2);
    console.log(dataset);
    const features = dataHandler.getFeaturesAndTargetNames();
    console.log(features);
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
