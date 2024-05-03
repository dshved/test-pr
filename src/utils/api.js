const DATA_URL = "https://restcountries.com/v3.1/all";

export const getCountryes = async () => {
  const response = await fetch(DATA_URL);
  const data = await response.json();
  const regions = {};
  data.map(item => {
    if (regions[item.region]) {
      regions[item.region].push(item);
    } else {
      regions[item.region] = new Array(item);
    }
    return false;
  });
  return Object.entries(regions);
};
