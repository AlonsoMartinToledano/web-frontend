import React, { Component } from 'react';
import Alumnos from "./Alumnos"
import Estadisticas from "./Estadisticas"

class Asignatura extends Component {
    state = {
        view: false,
    }

    onClick = () => {
        this.setState({view: !this.state.view})
    }
    
    render(){
        return (
            <div className="Asignatura">
                <h1 onClick={() => this.onClick()}>{this.props.asignatura.asignatura}</h1>
                {this.state.view?<p className="Profesor">{this.props.asignatura.profesor}</p>:null}
                {this.props.asignatura.alumnos.map(obj => <Alumnos nombre={obj.nombre} nota={obj.nota} key={obj.id} view={this.state.view} />)}
                {<Estadisticas alumnos={this.props.asignatura.alumnos} view={this.state.view} />}
            </div>
        )
    }
}

export {Asignatura as default}