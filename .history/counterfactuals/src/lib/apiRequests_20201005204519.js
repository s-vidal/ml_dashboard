import {returnDataset} from "./fakeApi";

export const getDataset = (datsetNumber) => {
  const data = returnDataset(datsetNumber);
  const dataset = JSON.parse(data);
  return dataset;
};

export const getDatasetsNames = () => {
  
};
