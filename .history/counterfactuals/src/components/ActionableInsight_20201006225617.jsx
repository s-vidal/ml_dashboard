import React, {useEffect, useState} from "react";
import "./ActionableInsigth.css";
import PieChart from "./PieChart";

const ActionableInsigth = ({dataHandler}) => {
  const [bestPermutations, setBestPermutations] = useState();
  const [targetName, setTargetName] = useState();

  useEffect(() => {
    console.log(dataHandler);
    const bestPermutations = dataHandler.getBestPermutations();
    const targetName = dataHandler.getFeaturesAndTargetNames()["targetname"];
    setTargetName(targetName);
    setBestPermutations(bestPermutations);
  }, [dataHandler]);

  return (
    <div>
      <div className="container insights-container">
        <div className="row pt-5 pl-5 pr-5 m-0">
          <h5 className="mb-4">Actionable Insights</h5>
        </div>
        <div className="row">
          <div className="ml-5 col-9 mb-5">
            <p className="text-secondary">
              Recommendations derived from the model
            </p>
          </div>
        </div>
        <div className="row">
          {bestPermutations &&
            bestPermutations.map((permutation) => (
              <PieChart data={permutation} targetName={targetName} />)
            }
        </div>
      </div>
    </div>
  );
};

export default ActionableInsigth;
