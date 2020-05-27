import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Body from "./components/Body";
import "./components/styles.css";

function App() {
  //OpenWeather     dd775482fc05c2ff48f17fe866972e8a
  //MapBox          pk.eyJ1IjoiYWdlbnRlYWxmYSIsImEiOiJjazFhbzB3MjMwbHBmM2Nxd3lyZ3FqaTBqIn0.JpWC1jHr0UQY1NWDVsnc3w
  const [error, setError] = useState(null);
  const [button, setButton] = useState(true);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("tokenOpenWeather") && localStorage.getItem("tokenMapBox")) {
      const endpointOpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=${localStorage.getItem("tokenOpenWeather")}`;
      const endpointMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=${localStorage.getItem("tokenMapBox")}`;

      axios.get(endpointOpenWeather).then(response => {

        axios.get(endpointMapBox).then(response => {
          setError(null);
          setMode(1);
        }).catch((_error) => {
          setError(_error.response.status);
        })

        setError(null);
      }).catch((_error) => {
        setError(_error.response.status);
      })
    }
    return () => {}
  }, [button])

  let body;
  if (!localStorage.getItem("tokenOpenWeather") || !localStorage.getItem("tokenMapBox")) {
    body = <div className="Authentication">
      <input id="tokenOpenWeather" placeholder="Token OpenWeather" className="Input"/>
      <input id="tokenMapBox" placeholder="Token MapBox" className="Input"/>
      <div className="Button" onClick={() => {localStorage.setItem("tokenOpenWeather", (document.getElementById("tokenOpenWeather").value));
                                              localStorage.setItem("tokenMapBox", (document.getElementById("tokenMapBox").value)); setError(null);
                                              setButton(!button);}}>Authenticate</div>
    </div>
  } else if (error === 401) {
    body = <div className="Authentication">
      <div className="Button" onClick={() => {localStorage.removeItem("tokenOpenWeather"); localStorage.removeItem("tokenMapBox"); setButton(!button)}}>Retry</div>
    </div>
  }
  
  if (mode === 1) {
    body = <Body setMode={setMode} />
  }

  return (
    <div className="App">
      <Header />
      {body}
    </div>
  );
}

export default App;
