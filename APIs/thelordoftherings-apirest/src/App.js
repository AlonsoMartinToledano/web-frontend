import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

import Header from "./components/Header";
import Body from "./components/Body";
import "./components/styles.css";

function App() {
  const [token, setToken] = useState(null); //-s26ozmMkDQK84cb290R
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token) {
      const endpoint = "https://the-one-api.herokuapp.com/v1/movie";

      axios.get(endpoint, { headers: { Authorization: `Bearer ${token}` }}).then(response => {
        setError(null);
        setMode(1);
      }).catch((_error) => {
        setError(_error.response.status);
      })
    }
    return () => {}
  }, [token])

  const contextData = {
    token: { get: token, set: setToken }, 
    mode: { get: mode, set: setMode },
    data: { get: data, set: setData }
  }

  let content;
  if (!token) {
    content = <div className="Authentication">
      <input id="token" placeholder="Token" className="InputToken"/>
      <div className="Button" onClick={() => {setToken(document.getElementById("token").value); setError(null); }}>Authenticate</div>
    </div>
  } else if (error === 401) {
    content = <div className="Authentication">
      <div className="Button" onClick={() => setToken(null)}>Retry</div>
    </div>
  }

  if (mode !== 0){
    if (mode === 1) {
      content = <div className="App">
        <Header />
      </div>
    } else {
      content = <div className="App">
        <Header />
        <Body />
      </div>
    }
  }

  return (
    <AppContext.Provider value={contextData}>
      {content}
    </AppContext.Provider>
  );
}

export default App;
