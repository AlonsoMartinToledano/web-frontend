import "./styles.css";
import React from 'react';

const FilCur = (props) => {
    const onCurso = props.onClick;
    const buscar = props.buscar;

    return (
        <div>
            <div className={props.state.curso === 1 ? "filterButtonSelected" : "filterButton"} onClick={ () => onCurso(1)}> Primero </div>
            <div className={props.state.curso === 2 ? "filterButtonSelected" : "filterButton"} onClick={ () => onCurso(2)}> Segundo </div>
            <div className={props.state.curso === 3 ? "filterButtonSelected" : "filterButton"} onClick={ () => onCurso(3)}> Tercero </div>
            <div className={props.state.curso === 0 ? "filterButtonSelected" : "filterButton"} onClick={ () => onCurso(0)}> Todos </div>
            <input type="text" onChange={buscar} />
        </div>
    )
}

export {FilCur as default};