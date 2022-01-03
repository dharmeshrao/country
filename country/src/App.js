
import "./App.css";
import { useState } from "react";

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default App;
