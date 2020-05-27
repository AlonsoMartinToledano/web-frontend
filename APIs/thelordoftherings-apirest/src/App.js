import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

import Header from "./components/Header";
import Body from "./components/Body";
import "./components/styles.css";

function App() {
  //-s26ozmMkDQK84cb290R
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(0);
  const [data, setData] = useState(null);
  const [button, setButton] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const endpoint = "https://the-one-api.herokuapp.com/v1/movie";

      axios.get(endpoint, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}).then(response => {
        setError(null);
        setMode(1);
      }).catch((_error) => {
        setError(_error.response.status);
      })
    }
    return () => {}
  }, [button])

  const contextData = {
    mode: { get: mode, set: setMode },
    data: { get: data, set: setData }
  }

  let content;
  if (!localStorage.getItem("token")) {
    content = <div className="Authentication">
      <input id="token" placeholder="Token" className="InputToken"/>
      <div className="Button" onClick={() => {localStorage.setItem("token", (document.getElementById("token").value)); setError(null); setButton(!button);}}>Authenticate</div>
    </div>
  } else if (error === 401) {
    content = <div className="Authentication">
      <div className="Button" onClick={() => {localStorage.removeItem("token"); setButton(!button);}}>Retry</div>
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
