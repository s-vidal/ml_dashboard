import getDataset from "./apiRequests";

class CounterFactuals {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }
  getdataset = (datasetNumber) => {
    getDataset(datasetNumber);
    

  };
}
