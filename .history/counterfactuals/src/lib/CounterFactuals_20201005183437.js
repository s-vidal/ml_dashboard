import getDataset from "./apiRequests";

class CounterFactuals {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }
  getdataset = (datasetNumber) => {
    const dataset = getDataset(datasetNumber);
    return dataset;
  };
}