import {getDataset, getDatasetsNames} from "./apiRequests";

class DataHandler {
  constructor(datasetNumber = 1) {
    this.datasetNumber = datasetNumber;
    this.dataset = getDataset(this.datasetNumber);
  }
  // getDataset = (datasetNumber = 1) => {
  //   const dataset = getDataset(datasetNumber);
  //   this.dataset = dataset;
  //   return dataset;
  // };

  getFeaturesAndTargetNames = () => {
    if ("sample" in this.dataset) {
      const sample = this.dataset["sample"];
      const keys = Object.keys(sample[0]);
      const targetname = keys.pop();
      const featuresNames = keys;
      return {targetname, featuresNames};
    }
  };

  getGraph = () => {
    return this.dataset;
  };

  getSample = () => {
    const sample 
    return ;
  };

  getDataSetNames = () => {
    const datasetNames = getDatasetsNames();
    return datasetNames;
  };
}

export default DataHandler;