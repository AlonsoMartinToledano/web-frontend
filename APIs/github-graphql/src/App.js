import React, { useState } from "react";
import AppContext from "./AppContext";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { setContext } from "apollo-link-context";

import Authentication from "./components/Authentication";
import Header from "./components/Header";
import Body from "./components/Body";
import "./components/styles.css";

const httpLink = new HttpLink ({
  uri: "https://api.github.com/graphql", //https://developer.github.com/v4/explorer/
});

function App() {
  //251b0d8f8db9bcca836757eeb91afdba204e73ff
  const [mode, setMode] = useState(0);
  const [bodyMode, setBodyMode] = useState(null);
  const [searchUser, setSearchUser] = useState(null);
  const [repositoryName, setRepositoryName] = useState(null);
  const [visibility, setVisibility] = useState("PUBLIC");

  const contextData = {
    mode: { get: mode, set: setMode },
    bodyMode: { get: bodyMode, set: setBodyMode },
    searchUser: { get: searchUser, set: setSearchUser },
    repositoryName: { get: repositoryName, set: setRepositoryName },
    visibility: { get: visibility, set: setVisibility }
  }

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
      },
    };
  });

  const client = new ApolloClient ({
    link : authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  let content;
  if (mode === 0) {
    if (!localStorage.getItem("token")) {
      content = <div className="Auth">
        <input id="token" placeholder="Token" className="Input"/>
        <div className="Button" onClick={() => {localStorage.setItem("token", (document.getElementById("token").value)); setMode(2);}}>Authenticate</div>
      </div>
    } else {
      setMode(3);
    }
  } else if (mode === 1) {
    content = <div className="Auth">
      <div className="Button" onClick={() => {localStorage.removeItem("token"); setMode(0);}}>Retry</div>
    </div>
  } else if (mode === 2) {
    content = <Authentication />
  } else if (mode === 3) {
    content = <div className="Mode3">
      <Header />
      <Body />
    </div>
  }

  return (
    <AppContext.Provider value={contextData}>
      <ApolloProvider client={client}>
        <div className="App">
          {content}
        </div>
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default App;
