import React, {useEffect} from "react";
import {getDataset} from "../lib/apiRequests";

const DashBoard = () => {
  useEffect(() => {
    console.log("hello");
    const data = getDataset(1);
    console.log(data);
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;