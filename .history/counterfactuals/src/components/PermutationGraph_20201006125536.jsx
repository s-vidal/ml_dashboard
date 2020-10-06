import React, {useState, useEffect} from "react";
import "./PermutationGraph.css";
import ResponsiveBarGraph from "./ResponsiveBar";

const PermutationGraph = ({featureNames, dataHandler}) => {
  const [checkedFeatures, setCheckedFeatures] = useState([]);

  useEffect(() => {
    const graphData = dataHandler.getGraphData(checkedFeatures);
    console.log(graphData);
  }, [dataHandler, featureNames, checkedFeatures]);

  const onFeatureClick = (feature) => {
    const features = [...checkedFeatures];
    const index = features.indexOf(feature);
    if (index > -1) {
      features.splice(index, 1);
    } else {
      features.push(feature);
    }
    setCheckedFeatures(features);
  };

  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row d-flex justify-content-center checkbox-bg">
        {featureNames["featuresNames"].map((feature, index) => (
          <span key={index} className="pt-3 pl-4 pr-4">
            <input
              type="checkbox"
              id={feature}
              name={feature}
              value={feature}
              onClick={() => onFeatureClick(feature)}
            ></input>
            <label className="pl-1" htmlFor="vehicle1">
              {feature}
            </label>
          </span>
        ))}
      </div>
      <div className="row graph-div p-2">
        <ResponsiveBarGraph data={graphData} />
      </div>
    </div>
  );
};

export default PermutationGraph;
