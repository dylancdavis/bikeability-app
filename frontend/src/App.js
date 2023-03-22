import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import geonamesService from "./services/geonamesService";
import { TextField, Autocomplete } from "@mui/material";

function App() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await geonamesService.getStates();
      setStates(data.geonames);
    })();
  }, []);

  return (
    <div className="App">
      <Banner />
      {console.log("states", states)}
      <Autocomplete
        options={states.map((s) => s.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    </div>
  );
}

export default App;
