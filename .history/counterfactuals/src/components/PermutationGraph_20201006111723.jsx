import React, {useState} from "react";
import "./PermutationGraph.css";

const PermutationGraph = ({featureNames, onFeatureClick}) => {
  const [checkedFeatures, setCheckedFeatures] = useState([]);

  const onFeatureClick = (feature) => {
    const index = checkedFeatures.indexOf(feature);
    if (index > -1) {
      checkedFeatures.splice(index, 1);
    } else {
      checkedFeatures.push(feature);
    }
    setCheckedFeatures(checkedFeatures);
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
    </div>
  );
};

export default PermutationGraph;
