import React from "react";
import "./ActionableInsigth.css";

const ActionableInsigth = () => {
  return (
    <div>
      <div className="container insights-container">
        <div className="row pt-5 pl-5 pr-5 m-0">
          <h5 className="mb-4">Actionable Insights</h5>
        </div>
        <div className="row">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  VHS.
                </div>
              </div>
            </div>
          </div>

          {/* <div className="ml-5 col-9 mb-5">
            <p className="text-secondary">
              Recommendations derived from the model
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ActionableInsigth;
