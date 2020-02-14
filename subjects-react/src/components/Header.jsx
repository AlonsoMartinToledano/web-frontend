import React from 'react';
import FilCur from "./FilCur";
import FilNota from "./FilNota";
import "./styles.css";

const Header = (props) => {
    const {onCurso, onNota} = props.onClick;
    const state = props.state;

    return (
        <div className="header">
            <FilCur onClick={onCurso} buscar={props.buscar} state={state}/>
            <FilNota onClick={onNota}/>
        </div>
    )
}

export {Header as default};