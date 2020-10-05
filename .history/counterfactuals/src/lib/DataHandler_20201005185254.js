import {getDataset} from "./apiRequests";

class DataHandler {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }
  getdataset = (datasetNumber = 1) => {
    const dataset = getDataset(datasetNumber);
    this.dataset = dataset;
    return dataset;
  };
  getFeaturesAndTargetNames = () => {
    if ("sample" in this.dataset) {
      const sample = this.dataset["sample"];
      console.log(sample[0]);
      const keys = sample[0]
      const targetname = keys.pop();
      const featuresNames = keys;
      return {targetname, featuresNames};
    }
  };
}

export default DataHandler;
