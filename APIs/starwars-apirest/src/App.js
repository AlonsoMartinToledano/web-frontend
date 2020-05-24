import React, { useState } from "react";
import AppContext from "./AppContext";

import Body from "./components/Body";
import Right from "./components/Right";
import "./components/styles.css";

function App() {
  const [mode, setMode] = useState(0);
  const [films, setFilms] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const contextData = {
    mode: { get: mode, set: setMode },
    films: { get: films, set: setFilms },
    selectedFilm: { get: selectedFilm, set: setSelectedFilm } 
  }

  let content;
  if (mode === 0) {
    content = <Body />
  } else {
    content = <div className="mode2">
      <Body />
      <Right />
    </div>
  }

  return (
    <AppContext.Provider value={contextData}>
      {content}
    </AppContext.Provider>
  );
}

export default App;
