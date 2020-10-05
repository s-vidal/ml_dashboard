import React, {useEffect} from "react";
import getDataset from "../lib/apiRequests";

const DashBoard = () => {
  useEffect(() => {
    getDataset(1);
  });

  return <div>DashBoard</div>;
};

export default DashBoard;
