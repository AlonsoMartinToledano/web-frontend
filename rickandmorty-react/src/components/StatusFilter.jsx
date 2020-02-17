import React from 'react';
import "./styles.css";

const StatusFilter = (props) => {
    const {onStatus, data} = props;

    return (
        <div>
            <div className={data.status === 1 ? "StatusButtonSelected" : "StatusButton"} onClick={ () => onStatus(1) }> Alive </div>
            <div className={data.status === 2 ? "StatusButtonSelected" : "StatusButton"} onClick={ () => onStatus(2) }> Dead </div>
            <div className={data.status === 0 ? "StatusButtonSelected" : "StatusButton"} onClick={ () => onStatus(0) }> All </div>
        </div>
    )
}

export {StatusFilter as default};