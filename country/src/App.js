import "./App.css";
import { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
function App() {
  const [newData, setnewDAta] = useState([]);
  const handleDebounce = useCallback(
    debounce( async (next) => {
      setnewDAta([])
      if(next.length < 2)return false;
      const {data} = await axios.get(`https://filthy-battledress-tuna.cyclic.app/country/?q=${next}`)
      setnewDAta(data.country)
      console.log(data.country);
    }, 500),
    []
  );
  const handleChange = (e) => {
    handleDebounce(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search countries here..."
        onChange={(e) => handleChange(e)}
      />
      <div className="heading">{newData ? newData.map((e) => <p key={e.country}>{e.country}</p>) : ""}</div>
    </div>
  );
}

export default App;
