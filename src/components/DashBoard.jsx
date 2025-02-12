import React, {useEffect, useState} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";
import Dropdown from "./Dropdown";
import SampleSection from "./SampleSection";
import PermutationGraph from "./PermutationGraph";
import ActionableInsigth from "./ActionableInsight";

const DashBoard = () => {
  const [datasetNames, setDatasetNames] = useState([]);
  const [sampleData, setSampleData] = useState();
  const [datasetNr, setdataSetNr] = useState(1);
  const [featureNames, setFeatureNames] = useState();
  const [dataHandler, setDataHandler] = useState();

  useEffect(() => {
    const dataHandler = new DataHandler(datasetNr);
    setDataHandler(dataHandler);
    const featuresAndTagName = dataHandler.getFeaturesAndTargetNames();
    setFeatureNames(featuresAndTagName);
    const sample = dataHandler.getSample();
    setSampleData(sample);
    const datasetNames = dataHandler.getDataSetNames();
    setDatasetNames(datasetNames);
  }, [datasetNr]);

  return (
    <div className="container dashboard pb-5 mb-5 shadow">
      <div className="row d-flex justify-content-start ml-4">
        <input
          className="search-bar form-control ml-5 mr-5 mt-5 shadow-sm"
          type="text"
          placeholder="Search.."
        ></input>
        <div className="pl-5">
          <button className="logout-btn mt-5">Lougout</button>
        </div>
      </div>
      <div className="row">
        <h3 className="offset-1 mt-5 text-secondary">Counterfactuals</h3>
        {datasetNames && (
          <div className="ml-5 pl-4 mt-5">
            <Dropdown
              title="Select Dataset"
              items={datasetNames}
              setItem={(nr) => {
                setdataSetNr(nr);
              }}
            />
          </div>
        )}
      </div>
      {sampleData && (
        <div className="row d-flex justify-content-center">
          <div className="col-10 mt-5 p-0">
            <SampleSection sampleData={sampleData} />
          </div>
        </div>
      )}
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 p-0">
          {featureNames && (
            <PermutationGraph
              featureNames={featureNames}
              dataHandler={dataHandler}
            />
          )}
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center mb-5">
        <div className="col-10 p-0">
          {dataHandler && <ActionableInsigth dataHandler={dataHandler} />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
