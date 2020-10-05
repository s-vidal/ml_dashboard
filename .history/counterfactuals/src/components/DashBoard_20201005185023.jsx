import React, {useEffect} from "react";
import {getDataset} from "../lib/apiRequests";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  useEffect(() => {
    const dataHandler = new DataHandler();
    dataHandler.
    console.log("hello");
    const data = getDataset(2);
    console.log(data);
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
