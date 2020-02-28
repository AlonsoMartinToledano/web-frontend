import React from 'react';
import "./styles.css";

const Header = (props) => {
    const {data} = props;
    const {onMode} = props.onClick;
    return (
        <div className="Header">
            <div className="ChangeButton" onClick={onMode}>↺</div>
                <div className="Display">
                    <div className="Result">{data.result2}</div>
                    <div className="Result">{data.result1}</div>
                    <div className="Operation">{data.operation}</div>
                </div>
        </div>       
    )
}

export {Header as default};