import React, {useEffect, useState} from "react";
import DataHandler from "../lib/DataHandler";
import "./DashBoard.css";
import Dropdown from "./Dropdown";
import SampleSection from "./SampleSection";
import PermutationGraph from "./PermutationGraph";

const DashBoard = () => {
  const [datasetNames, setDatasetNames] = useState([]);
  const [sampleData, setSampleData] = useState();
  const [datasetNr, setdataSetNr] = useState(1);
  const [featureNames, setFeatureNames] = useState();
  const [dataHandler, setDataHandler] = useState();
  const [selectedDataset, setSelectedDataset] = useState("");

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
    <div className="container dashboard pb-5 mb-5">
      <div className="">
        <div className="d-flex flex-row-reverse">
          <div className="close mr-2 mt-4 d-flex justify-content-center">
            <h5 className="mt-1">✕</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="offset-1 mb-3 mt-3 text-secondary">Counterfactuals</h3>
      </div>
      <div className="row mt-5">
        <div className="offset-1">
          {datasetNames && (
            <>
              <Dropdown
                title="Select Dataset"
                items={datasetNames}
                setItem={(nr) => {
                  setdataSetNr(nr);
                }}
                setSelectedDataset={setSelectedDataset}
              />
              <h6 className="text-secondary ml-2 mt-2">{selectedDataset}</h6>
            </>
          )}
        </div>
      </div>
      {sampleData && (
        <div className="row d-flex justify-content-center">
          <div className="col-10 mt-5 p-0">
            <SampleSection sampleData={sampleData} />
          </div>
        </div>
      )}
      <div className="row mt-5 d-flex justify-content-center mb-5">
        <div className="col-10 p-0">
          {featureNames && (
            <PermutationGraph
              featureNames={featureNames}
              dataHandler={dataHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;