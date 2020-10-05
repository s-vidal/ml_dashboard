import React, {useEffect} from "react";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    const dataset = dataHandler.getdataset(1);
    console.log(dataset);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    console.log(featuresAndTag);
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;