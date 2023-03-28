import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import { Container, TextField, Autocomplete, Button } from "@mui/material";
import placeService from "./services/placeService";

function App() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const getStates = async function () {
      const data = await placeService.getAllStates();
      setStates(data);
    };
    getStates();
  }, []);

  useEffect(() => {
    if (!selectedState) return;
    const getCities = async function () {
      const data = await placeService.getAllCities();
      const citiesInState = data.filter(
        (c) => c.state_id === selectedState.state_id
      );
      console.log("citiesInState", citiesInState);
      setCities(citiesInState);
    };
    getCities();
  }, [selectedState]);

  const stateOptions = states.map((s) => {
    return {
      ...s,
      label: s.state,
    };
  });

  const cityOptions = cities.map((c) => {
    return {
      ...c,
      label: c.city,
    };
  });

  const wrapperStyle = {
    display: "flex",
    gap: "16px",
    padding: "16px",
  };

  return (
    <Container className="App">
      <Banner />
      <div style={wrapperStyle}>
        <Autocomplete
          options={stateOptions}
          value={selectedState}
          onChange={(e, newValue) => setSelectedState(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="State" />}
        />
        <Autocomplete
          options={cityOptions}
          value={selectedCity}
          onChange={(e, newValue) => setSelectedCity(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="City" />}
        />
        <Button>Check</Button>
      </div>
    </Container>
  );
}

export default App;
