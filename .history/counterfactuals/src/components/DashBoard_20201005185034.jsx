import React, {useEffect} from "react";
import {getDataset} from "../lib/apiRequests";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    dataHandler.getdataset(1);
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
