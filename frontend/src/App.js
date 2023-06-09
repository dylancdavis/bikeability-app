import { useEffect, useState } from "react";
import { Container, TextField, Autocomplete, Button } from "@mui/material";
import Banner from "./components/Banner";
import WalkScore from "./components/WalkScore";
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
      const citiesInState = await placeService.getCityByState(
        selectedState.state_id
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

  const handleStateChange = (e, newValue) => {
    setSelectedState(newValue);
    if (!newValue) setSelectedCity(null);
  };

  const wrapperStyle = {
    display: "flex",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div className="App">
      <Banner />
      <Container>
        <div style={wrapperStyle}>
          <Autocomplete
            options={stateOptions}
            value={selectedState}
            onChange={handleStateChange}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
          <Autocomplete
            options={cityOptions}
            value={selectedCity}
            onChange={(e, newValue) => setSelectedCity(newValue)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
            disabled={!selectedState}
          />
          <Button disabled={!selectedCity || !selectedState}>Check</Button>
        </div>
        {selectedCity && <WalkScore city={selectedCity} />}
      </Container>
    </div>
  );
}

export default App;
