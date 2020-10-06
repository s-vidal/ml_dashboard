import React, {useState, useEffect} from "react";
import "./PermutationGraph.css";
import ResponsiveBarGraph from "./ResponsiveBar";

const PermutationGraph = ({featureNames, dataHandler}) => {
  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const [graphData, setGraphdata] = useState();
  const [featureKeys, setFeatureKeys] = useState("");

  useEffect(() => {
    const graphData = dataHandler.getGraphData(checkedFeatures);
    setGraphdata(graphData);
    const featureKeys = dataHandler.getFeaturesAndTargetNames();
    setFeatureKeys(featureKeys);
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
      <div className="row pt-5 pl-5 pr-5 m-0">
        <h5 className="mb-4">Feature Permutation</h5>
      </div>
      <div className="row">
        <div className="ml-5 col-9">
          <p className="text-secondary">
            The values for each feature represents the precentage increase or
            decrease which is required to achieve the precentage change in the
            target for this feature permutation.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="ml-5 pl-3">
          <p className="text-secondary">
            The striped area represents the effect on target value in percent,
            if change is larger than 0.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center checkbox-bg">
        <h6 className="text-secondary pt-3">Select by feature:</h6>
        {featureNames["featuresNames"].map((feature, index) => (
          <span key={index} className="d-flex pt-3 pl-4 pr-4">
            <input
              className="mr-2 pt-1"
              type="checkbox"
              id={feature}
              name={feature}
              value={feature}
              onClick={() => onFeatureClick(feature)}
            ></input>
            <label className="align-self-top" htmlFor="vehicle1">
              {feature}
            </label>
          </span>
        ))}
      </div>
      <div className="row graph-div pl-3 pr-3 pb-3 ml-3 mr-3">
        {graphData && (
          <ResponsiveBarGraph
            data={graphData}
            features={checkedFeatures}
            featuresKeys={featureKeys}
          />
        )}
      </div>
    </div>
  );
};

export default PermutationGraph;
