import React, {useState} from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames, setCheckedFeatures}) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const groupFeatureNames = () => {
    const groupedFeatureArray = [];

    for (let i = 0; i < featureNames["featuresNames"].length; i += 3) {
      groupedFeatureArray.push(featureNames["featuresNames"].slice(i, i + 3));
    }
    console.log(groupedFeatureArray);
    return groupedFeatureArray;
  };

  groupFeatureNames();

  const onFeatureClick = (feature) => {
    const index = selectedFeatures.indexOf(feature);
    if (index > -1) {
      selectedFeatures.splice(index, 1);
    } else {
      selectedFeatures.push(feature);
    }
    setSelectedFeatures(selectedFeatures);
    setCheckedFeatures(selectedFeatures);
  };

  return (
    <div className="container permutation-container">
      <div className="row p-4 pl-5 pr-5 m-0">
        <h5 className="mb-5">Feature Permutation</h5>
      </div>
      <div className="row d-flex justify-content-center checkbox-bg">
        {groupFeatureNames().map((array) => {
          <span key={array[0]} className="pt-3 pl-3 pr-3">
            <input
              type="checkbox"
              id={array[0]}
              name={array[0]}
              value={array[0]}
              onClick={() => onFeatureClick(array[0])}
            ></input>
            <label className="pl-1" htmlFor="vehicle1">
              {array[0]}
            </label>
          </span>;
          <span key={array[1]} className="pt-3 pl-3 pr-3">
            <input
              type="checkbox"
              id={array[1]}
              name={array[1]}
              value={array[1]}
              onClick={() => onFeatureClick(array[1])}
            ></input>
            <label className="pl-1" htmlFor="vehicle1">
              {array[1]}
            </label>
          </span>;
          <span key={array[2]} className="pt-3 pl-3 pr-3">
            <input
              type="checkbox"
              id={array[1]}
              name={array[1]}
              value={array[1]}
              onClick={() => onFeatureClick(array[1])}
            ></input>
            <label className="pl-1" htmlFor="vehicle1">
              {array[1]}
            </label>
          </span>;
        })}
        {/* {featureNames["featuresNames"].map((feature, index) => (
          <span key={index} className="pt-3 pl-3 pr-3">
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
        ))} */}
      </div>
    </div>
  );
};

export default PermutationGraph;
