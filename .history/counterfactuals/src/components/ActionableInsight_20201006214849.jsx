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
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
