import React, { useState } from "react";
import AppContext from "./AppContext";

import Right from "./components/Right";
import Body from "./components/Body";
import "./components/styles.css";

function App() {
  const [characterId, setCharacterId] = useState(null);
  const [charactersData, setCharactersData] = useState(null);

  const contextData = {
    characterId: { get: characterId, set: setCharacterId },
    charactersData: { get: charactersData, set: setCharactersData }
  }

  return (
    <AppContext.Provider value={contextData}>
      <div className="App">
        <Body />
        <Right />
      </div>
    </AppContext.Provider>
  );
}

export default App;
