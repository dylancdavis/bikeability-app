import axios from "axios";

const baseUrl = "http://localhost:3001/api/locations";

const getAllStates = async () => {
  const response = await axios.get(`${baseUrl}/states`);
  return response.data;
};

const getCityByState = async (state_id) => {
  const response = await axios.get(`${baseUrl}/cities/${state_id}`);
  return response.data;
};

const placeService = { getAllStates, getCityByState };
export default placeService;
