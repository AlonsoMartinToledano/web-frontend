import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Body from "./components/Body";
import "./components/styles.css";

function App() {
  const [tokenOpenWeather, setTokenOpenWeather] = useState(null); //dd775482fc05c2ff48f17fe866972e8a
  const [tokenMapBox, setTokenMapBox] = useState(null); //pk.eyJ1IjoiYWdlbnRlYWxmYSIsImEiOiJjazFhbzB3MjMwbHBmM2Nxd3lyZ3FqaTBqIn0.JpWC1jHr0UQY1NWDVsnc3w
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tokenOpenWeather) {
      const endpointOpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=${tokenOpenWeather}`;
      const endpointMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=${tokenMapBox}`;

      axios.get(endpointOpenWeather).then(response => {

        axios.get(endpointMapBox).then(response => {
          setError(null);
        }).catch((_error) => {
          setError(_error.response.status);
        })

      }).catch((_error) => {
        setError(_error.response.status);
      })
    }
    return () => {}
  }, [tokenOpenWeather])

  let body;
  if (!tokenOpenWeather || !tokenMapBox) {
    body = <div className="Authentication">
      <input id="tokenOpenWeather" placeholder="Token OpenWeather" className="Input"/>
      <input id="tokenMapBox" placeholder="Token MapBox" className="Input"/>
      <div className="Button" onClick={() => {setTokenOpenWeather(document.getElementById("tokenOpenWeather").value);
                                              setTokenMapBox(document.getElementById("tokenMapBox").value); setError(null);}}>Authenticate</div>
    </div>
  } else if (error === 401) {
    body = <div className="Authentication">
      <div className="Button" onClick={() => {setTokenOpenWeather(null); setTokenMapBox(null);}}>Retry</div>
    </div>
  } else {
    body = <Body tokenMapBox={tokenMapBox} tokenOpenWeather={tokenOpenWeather}/>
  }

  return (
    <div className="App">
      <Header />
      {body}
    </div>
  );
}

export default App;
