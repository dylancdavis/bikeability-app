import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import geonamesService from "./services/geonamesService";

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
      {states.map((s) => {
        return (
          <div key={s.adminCode1}>
            {s.name} ({s.adminCode1})
          </div>
        );
      })}
    </div>
  );
}

export default App;
