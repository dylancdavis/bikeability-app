import {useState, useEffect} from 'react'
import Banner from './components/Banner'

function App() {

  const [cities, setCities] = useState([])

  useEffect(() => setCities([{name: 'Denver'}, {name: 'Madison'}]), [])
  
  return (
  <div className="App">
    <Banner />
    {cities.map(c => {
      return (<div key={c.name}>{c.name}</div>)
    })}
  </div>
  )

}

export default App;
