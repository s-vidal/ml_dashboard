import React from "react";
import "ActionableInsight.css";

const ActionableInsigth = () => {
  return (
    <div>
      <div className="container permutation-container">
        <div className="row pt-5 pl-5 pr-5 m-0">
          <h5 className="mb-4">Feature Permutation</h5>
        </div>
        <div className="row">
          <div className="ml-5 col-9 mb-5">
            <p className="text-secondary">
              The values for each feature represents the precentage increase or
              decrease which is required to achieve the precentage change in the
              target for this feature permutation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionableInsigth;
