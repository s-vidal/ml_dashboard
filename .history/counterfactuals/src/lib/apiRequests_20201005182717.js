import returnDataset from "./fakeApi";

export default  getDataset = (datsetNumber) => {
  const data = returnDataset(datsetNumber);
  const dataset = JSON.parse(data);
  return dataset;
};
