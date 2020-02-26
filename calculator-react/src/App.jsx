import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import Buttons from "./components/Buttons";

class App extends Component {

  state = {
    operation: ""
  }

  onButtonHandler = (newOperation) => {
    const oldOperation = this.state.operation;
    const operation = oldOperation + newOperation;
    this.setState({operation});
  }

  onEqualHandler = () => {
    const operation = eval(this.state.operation);
    this.setState({operation})
  }

  onCHandler = (operation) => {
    this.setState({operation});
  }

  onDeleteHandler = () => {
    const oldOperation = this.state.operation;
    const operation = oldOperation.slice(0, -1);
    this.setState({operation});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state} />
        <Buttons data={this.state} onClick={{onButton: this.onButtonHandler, onEqual: this.onEqualHandler, onC: this.onCHandler, onDelete: this.onDeleteHandler}} />
      </div>
    );
  }
}

export default App;
