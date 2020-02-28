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
      result[0].replace("sin(", '');
      result[0].replace(")", "");
      result[0] = Math.sin(result[0]);
    }
    // else if (operation.includes("cos(")) {
    //   operation = operation.replace("cos(", '');
    //   operation = operation.replace(")", "");
    //   operation = Math.cos(operation);
    // }
    // else if (operation.includes("tan(")) {
    //   operation = operation.replace("tan(", '');
    //   operation = operation.replace(")", "");
    //   operation = Math.tan(operation);
    // }
    else {
      result[0] = eval(this.state.result[0]);
    }

    this.setState({result});
  }

  onCHandler = () => {
    const result = this.state.result;
    result[0] = "";
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
        <Calculator data={this.state} onClick={{onButton: this.onButtonHandler, onEqual: this.onEqualHandler, onC: this.onCHandler, onDelete: this.onDeleteHandler, onMode: this.onModeHandler}}/>
      </div>
    );
  }
}

export default App;
