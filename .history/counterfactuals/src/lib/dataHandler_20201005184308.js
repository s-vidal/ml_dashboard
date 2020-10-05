import getDataset from "./apiRequests";

class CounterFactuals {
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
      const keys = sample[0].keys();
      const featuresNames = keys[(0, keys.length - 1)];
      const targetname =  = arr[arr.length - 1]
    }
  };
}

export default CounterFactuals;
