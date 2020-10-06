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
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row">
        <div className=" offset-2 col-6">
          <h6 className="text-secondary">
            The values for each feature represent precentage increase or
            decrease which are required to achieve the precentage change in the
            target for this feature permutation.
          </h6>
        </div>
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
