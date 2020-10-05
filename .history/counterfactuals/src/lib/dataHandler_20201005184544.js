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
      const targetname = keys.pop();
      const featuresNames = keys;
      return {}
    }
  };
}

export default CounterFactuals;
