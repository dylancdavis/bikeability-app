import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAllStates = async () => {
  const response = await axios.get(`${baseUrl}/states`);
  return response.data;
};

const getAllCities = async () => {
  const response = await axios.get(`${baseUrl}/cities`);
  return response.data;
};

const placeService = { getAllStates, getAllCities };
export default placeService;
