import React, { Component } from 'react';
import './App.css';

import Calculator from "./components/Calculator"

class App extends Component {

  state = {
    result: [""],
    mode: 0
  }

  onButtonHandler = (newOperation) => {
    const result = this.state.result;
    result[0] = result[0] + newOperation;
    this.setState({result});
  }

  onEqualHandler = () => {
    const result = this.state.result;

    result[2] = result[1];
    result[1] = result[0];

    if (result[0].includes("sin(")) {
      result[0] = result[0].replace("sin(", "Math.sin(");
    }
    else if (result[0].includes("cos(")) {
      result[0] = result[0].replace("cos(", "Math.cos(");
    }
    else if (result[0].includes("tan(")) {
      result[0] = result[0].replace("tan(", "Math.tan(");
    }

    result[0] = eval(this.state.result[0]);
    this.setState({result});
  }

  onCHandler = () => {
    const result = this.state.result;
    result[0] = "";
    this.setState({result});
  }

  onResultHandler = (index) => {
    const result = this.state.result;
    result[0] = result[index];
    this.setState({result});
  }

  onDeleteHandler = () => {
    const result = this.state.result;
    result[0] = result[0].slice(0, -1);
    this.setState({result});
  }

  onModeHandler = () => {
    const oldMode = this.state.mode;
    const mode = !oldMode;
    this.setState({mode});
  }

  render() {
    return (
      <div className="App">
        <Calculator data={this.state} onClick={{onButton: this.onButtonHandler, onEqual: this.onEqualHandler, onC: this.onCHandler, onDelete: this.onDeleteHandler, onMode: this.onModeHandler, onResult: this.onResultHandler}}/>
      </div>
    );
  }
}

export default App;
