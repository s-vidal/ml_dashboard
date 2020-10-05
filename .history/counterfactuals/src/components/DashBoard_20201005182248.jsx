import React, {useEffect} from "react";
import getDataset from "../lib/apiRequests";

const DashBoard = () => {
  useEffect(() => {getDataset});

  return <div>DashBoard</div>;
};

export default DashBoard;
