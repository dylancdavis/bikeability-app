import axios from "axios";

const baseUrl = "https://localhost:3001/api/scores";
// const baseUrl = "https://api.walkscore.com";

const getScoresByCity = async (city) => {
  console.log("city:", city);
  const address = encodeURI(`${city.city} ${city.state_id}`);

  const response = await axios.get(
    `http://localhost:3001/api/scores/?address=${address}&lat=${city.lat}&lng=${city.lng}`
  );
  console.log("response", response);
  return response.data;
};

const getScoresByCoordinates = async (coordinates) => {
  // TODO - reverse geocode for address
  return null;
};

const walkScoreService = { getScoresByCity, getScoresByCoordinates };
export default walkScoreService;
