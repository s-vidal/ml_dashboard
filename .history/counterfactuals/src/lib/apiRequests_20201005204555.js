import {returnDataset, getDatasetsNames} from "./fakeApi";

export const getDataset = (datsetNumber) => {
  const data = returnDataset(datsetNumber);
  const dataset = JSON.parse(data);
  return dataset;
};

export const getDatasetsNames = () => {
  const datasetNames = getDatasetsNames();
  return 
};
