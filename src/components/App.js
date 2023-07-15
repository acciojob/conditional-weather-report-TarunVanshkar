
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" })
  const [temp, setTemp] = useState(0);

  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';
  function handleClick() {
    setWeather({ ...weather, temperature: temp, conditions: "Sunny" })
    console.log(weather)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Weather Report</h1>
      <input type="text" placeholder="Enter Temperature" onChange={(e) => setTemp(e.target.value)} />
      <button onClick={handleClick}>Show Condition</button>
      <p>Temperature: <span style={{ color:temperatureColor }}>{weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App
