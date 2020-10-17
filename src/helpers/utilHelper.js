const getParseData = (data) => {
  return JSON.parse(data);
};

const getStringifyData = (data) => {
  return JSON.stringify(data);
};

export default {
  getParseData,
  getStringifyData,
};
