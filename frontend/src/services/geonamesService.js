import axios from "axios";

const username = "dylcdav";
const statesURL = `http://api.geonames.org/childrenJSON?geonameId=6252001&username=${username}`;

const getStates = async () => {
  const response = await axios.get(statesURL);
  console.log(response.data);

  return response.data;
};

const geonamesService = { getStates };

export default geonamesService;
