import React, { Component } from 'react';
import './App.css';

import Calculator from "./components/Calculator"

class App extends Component {

  state = {
    operation: "",
    result1: "",
    result2: "",
    mode: 0
  }

  onButtonHandler = (newOperation) => {
    const oldOperation = this.state.operation;
    const operation = oldOperation + newOperation;
    this.setState({operation});
  }

  onEqualHandler = () => {
    let operation = this.state.operation;

    this.setState({result2: this.state.result1});
    this.setState({result1: this.state.operation});

    if (this.state.operation.includes("sin(")) {
      operation = operation.replace("sin(", '');
      operation = operation.replace(")", "");
      operation = Math.sin(operation);
    }
    else if (operation.includes("cos(")) {
      operation = operation.replace("cos(", '');
      operation = operation.replace(")", "");
      operation = Math.cos(operation);
    }
    else if (operation.includes("tan(")) {
      operation = operation.replace("tan(", '');
      operation = operation.replace(")", "");
      operation = Math.tan(operation);
    }
    else {
      operation = eval(this.state.operation);
    }

    this.setState({operation});
  }

  onCHandler = (operation) => {
    this.setState({operation});
  }

  onDeleteHandler = () => {
    const oldOperation = this.state.operation;
    const operation = oldOperation.slice(0, -1);
    this.setState({operation});
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
