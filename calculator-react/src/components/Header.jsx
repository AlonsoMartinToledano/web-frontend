import React from 'react';
import "./styles.css";

const Header = (props) => {
    const {data} = props;
    const {onMode} = props.onClick;
    return (
        <div className="Header">
            <div className="ChangeButton" onClick={onMode}>Mode</div>
                <div className="Display">
                    <div className="Result">{data.result[2]}</div>
                    <div className="Result">{data.result[1]}</div>
                    <div className="Operation">{data.result[0]}</div>
                </div>
        </div>       
    )
}

export {Header as default};