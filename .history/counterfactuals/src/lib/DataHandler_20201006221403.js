import {getDataset, getDatasetsNames} from "./apiRequests";

class DataHandler {
  constructor(datasetNumber = 0) {
    this.datasetNumber = datasetNumber;
    this.dataset = getDataset(this.datasetNumber);
  }

  getFeaturesAndTargetNames = () => {
    if ("sample" in this.dataset) {
      const sample = this.dataset["sample"];
      const keys = Object.keys(sample[0]);
      const targetname = keys.pop();
      const featuresNames = keys;
      const filteredFeatures = [];
      featuresNames.forEach((feature) => {
        if (!(this.filterPermutations([feature]).length === 0)) {
          filteredFeatures.push(feature);
        }
      });
      return {targetname, featuresNames: filteredFeatures};
    }
  };

  getGraphData = (checkedFeatures) => {
    const featuresArray = this.filterPermutations(checkedFeatures);
    return featuresArray;
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

  filterPermutations = (checkedFeatures) => {
    const filteredFeaturesArray = [];
    const permutations = this.dataset["explanations"];
    for (const [key, value] of Object.entries(permutations)) {
      const permutation = value;
      const permutationKeys = Object.keys(permutation);
      permutationKeys.pop();
      let hasAllKeys = true;
      checkedFeatures.forEach((key) => {
        if (!permutationKeys.includes(key)) {
          hasAllKeys = false;
        }
      });
      if (hasAllKeys) {
        filteredFeaturesArray.push(permutation);
      }
    }
    return filteredFeaturesArray;
  };
  getBestPermutations = () => {
    const targetName = this.getFeaturesAndTargetNames()["targetname"];
    const highestPercentag = 
    this.dataset.forEach((permutation) => {});
  };
}

export default DataHandler;
