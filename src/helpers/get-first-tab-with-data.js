const getFirstTabWithData = (data, type) => {
  return data.findIndex(item => item[type].length > 0) || 0;
}

export default getFirstTabWithData;
