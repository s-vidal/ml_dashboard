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

  getGraph = (checkedFeatures) => {
    featurePethis.getFeaturePermutations();
    return this.dataset;
  };

  getSample = () => {
    let sample = this.dataset["sample"];
    sample = sample[0];
    const keys = Object.keys(sample);
    const target_key = keys.pop();
    const target_dict = {};
    target_dict[target_key] = sample[target_key];
    const target = [target_dict];
    const features = [];
    keys.forEach((key) => {
      let dict = {};
      dict[key] = sample[key];
      features.push(dict);
    });
    return {features: features, target: target};
  };

  getDataSetNames = () => {
    const datasetNames = getDatasetsNames();
    return datasetNames;
  };

  getFeaturePermutations = () => {
    const permutations = this.dataset["explanations"];
    console.log(permutations);
  };
}

export default DataHandler;