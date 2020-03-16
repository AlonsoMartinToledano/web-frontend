import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {

  state = {
    status: 0,
    textFilter: null,
    bigCharacter: null
  }

  onStatusClickHandler = (status) => {
    this.setState({status});
  }

  onTextFilterHandler(event) {
    const textFilter = event.target.value;
    this.setState({textFilter});
  }

  onBigCharacterHandler = (bigCharacter) => {
    this.setState({bigCharacter});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={{onStatus: this.onStatusClickHandler}}
          textFilter={(event) => this.onTextFilterHandler(event)}
          data={this.state}
        />
        <Body onClick={{onBigCharacter: this.onBigCharacterHandler}}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
