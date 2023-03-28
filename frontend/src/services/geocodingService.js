import axios from "axios";

const baseUrl = "https://maps.googleapis.com/maps/api/geocode";
const API_KEY = "placeholder";

const getCoordinates = async (address) => {
  console.log("Received geocoding request for address:", address);
  const response = await axios.get(
    `${baseUrl}/json?address=${address}&key=${API_KEY}`
  );
  console.log("geocoding response:", response);
  return response.data.results[0].geometry.location;
};

const geocodingService = { getCoordinates };
export default geocodingService;
