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
        {groupFeatureNames().forEach}
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
