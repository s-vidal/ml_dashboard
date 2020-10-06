import React, {useState, useEffect} from "react";
import "./PermutationGraph.css";
import ResponsiveBarGraph from "./ResponsiveBar";

const PermutationGraph = ({featureNames, dataHandler}) => {
  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const [graphData, setGraphdata] = useState();
  const [targetName, setTragetName] = useState("");

  useEffect(() => {
    const graphData = dataHandler.getGraphData(checkedFeatures);
    setGraphdata(graphData);
    const targetKeyName = dataHandler.getFeaturesAndTargetNames()["targetname"];
    setTragetName(targetKeyName);
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
    <ResponsiveBarGraph
        data={graphData}
        features={checkedFeatures}
        target={targetName}
    />
      </div>
    </div>
  );
};

export default PermutationGraph;
