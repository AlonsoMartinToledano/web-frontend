import React from 'react';
import "./styles.css";

const Buttons = (props) => {
    const {onButton, onEqual, onC, onDelete} = props.onClick;
    const {data} = props;

    let scientific = <div></div>;

    if(data.mode){
        scientific =
            <div className="ButtonsScientific">
                <div className="ButtonOperation" onClick={ () => onButton("sin(") }>sin(</div>
                <div className="ButtonOperation" onClick={ () => onButton("cos(") }>cos(</div>
                <div className="ButtonOperation" onClick={ () => onButton("tan(") }>tan(</div>
                <div className="ButtonOperation" onClick={ () => onButton("(") }>(</div>
                <div className="ButtonOperation" onClick={ () => onButton(")") }>)</div>
            </div>
    }

    return (
        <div className="Buttons">
            {scientific}
            <div className="ButtonsRow">
                <div className="ButtonOperation" onClick={onC}>C</div>
                <div className="ButtonOperation" onClick={onDelete}>⬅</div>
                <div className="ButtonOperation" onClick={ () => onButton("/") }>/</div>
                <div className="Button" onClick={ () => onButton("7") }>7</div>
                <div className="Button" onClick={ () => onButton("8") }>8</div>
                <div className="Button" onClick={ () => onButton("9") }>9</div>
                <div className="Button" onClick={ () => onButton("4") }>4</div>
                <div className="Button" onClick={ () => onButton("5") }>5</div>
                <div className="Button" onClick={ () => onButton("6") }>6</div>
                <div className="Button" onClick={ () => onButton("1") }>1</div>
                <div className="Button" onClick={ () => onButton("2") }>2</div>
                <div className="Button" onClick={ () => onButton("3") }>3</div>
                <div className="ButtonZero" onClick={ () => onButton("0") }>0</div>
                <div className="Button" onClick={ () => onButton(".") }>.</div>
            </div>
            <div className="ButtonsColumn">
                <div className="ButtonOperation" onClick={ () => onButton("*") }>x</div>
                <div className="ButtonOperation" onClick={ () => onButton("-") }>-</div>
                <div className="ButtonOperation" onClick={ () => onButton("+") }>+</div>
                <div className="ButtonEqual" onClick={onEqual}>=</div>
            </div>
        </div>
    )
}

export {Buttons as default};