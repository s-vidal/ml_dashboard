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
      featuresNames.forEach(feature=>)
      return {targetname, featuresNames};
    }
  };

  getGraph = (checkedFeatures) => {
    this.getFeaturePermutations(checkedFeatures);
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

  getFeaturePermutations = (checkedFeatures) => {
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
      if (permutationKeys.length === checkedFeatures.length && hasAllKeys) {
        filteredFeaturesArray.push(permutation);
      }
    }
    console.log(filteredFeaturesArray);
  };
}

export default DataHandler;
