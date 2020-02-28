import React from 'react';
import "./styles.css";

const Header = (props) => {
    const {data} = props;
    const {onMode, onResult} = props.onClick;
    return (
        <div className="Header">
            <div className="ChangeButton" onClick={onMode}>Mode</div>
                <div className="Display">
                    <div className="Result" onClick={ () => onResult(2) }>{data.result[2]}</div>
                    <div className="Result" onClick={ () => onResult(1) }>{data.result[1]}</div>
                    <div className="Operation">{data.result[0]}</div>
                </div>
        </div>       
    )
}

export {Header as default};