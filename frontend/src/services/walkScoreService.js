import axios from "axios";
import geocodingService from "./geocodingService";

const baseUrl = "https://api.walkscore.com";
const API_KEY = "f4a3610656d8b6de51b0640aa0e9a0d2";

const getScoresByCity = async (city, state) => {
  console.log(`Getting score for ${city}, ${state}`);
  const address = encodeURIComponent(`${city} ${state}`);
  console.log("encoded address: ", address);

  const { lat, lng } = await geocodingService.getCoordinates(address);
  console.log("coordinates:", { lat, lng });

  const response = await axios.get(
    `${baseUrl}/score?format=json&address=${address}&lat=${lat}&lon=${lng}&transit=1&bike=1&wsapikey=${API_KEY}`
  );
  return response.data;
};

const getScoresByCoordinates = async (coordinates) => {
  // TODO - reverse geocode for address
  return null;
};

const walkScoreService = { getScoresByCity, getScoresByCoordinates };
export default walkScoreService;
