import React from "react";
import {useEffect} from "react";
import "./ActionableInsigth.css";
import PieChart from "./PieChart";

const ActionableInsigth = ({dataHandler}) => {
  const [bestPermutations, setBestPermutations] = useState();
  useEffect(() => {
    console.log(dataHandler);
    const bestPermutations = dataHandler.getBestPermutations();
    console.log(bestPermutations);
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
          {bestPermutations &&permutation=>{}) bestPermutations.map()<PieChart data={bestPermutations} />}
        </div>
      </div>
    </div>
  );
};

export default ActionableInsigth;
