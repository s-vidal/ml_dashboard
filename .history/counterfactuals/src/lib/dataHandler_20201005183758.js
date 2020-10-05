import getDataset from "./apiRequests";

class CounterFactuals {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }
  getdataset = (datasetNumber) => {
    const dataset = getDataset(datasetNumber);
    this.dataset = dataset;
    return dataset;
  };
  getFeatures = () => {
    if "sample" in this.dataset{}
    const sample = this.dataset["sample"];
  };
}

export default CounterFactuals;
