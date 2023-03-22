import { useState } from "react";
import Banner from "./components/Banner";
import { TextField, Autocomplete } from "@mui/material";

function App() {
  const [states, setStates] = useState(["New York", "California"]);

  return (
    <div className="App">
      <Banner />
      {console.log("states", states)}
      <Autocomplete
        options={states}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    </div>
  );
}

export default App;
