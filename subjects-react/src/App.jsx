import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"

import Asignaturas from "./assets/data";

class App extends Component {

  state = {
    asignaturas: [...Asignaturas],
    curso: 0,
    nota: 0,
    buscarAsignatura: null
  };

  onCursoClickHandler = (curso) => {
    this.setState({curso});
  }

  onNotaClickHandler(nota){
    this.setState({nota});
  }

  buscarAsignaturaHandler(event){
    const buscarAsignatura = event.target.value;
    this.setState({buscarAsignatura});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={{onCurso: this.onCursoClickHandler, onNota: this.onNotaClickHandler}}
          buscar={(event) => this.buscarAsignaturaHandler(event)}
          state={this.state}
        />
      <Body data={this.state} />
      </div>
      
    );
  }
}

export default App;
