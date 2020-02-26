import React from 'react';
import "./styles.css";

const Display = (props) => {
    const {data} = props;
    return (
        <div className="Header">
            <div className="ChangeButton">↺</div>
            <div className="Display">
                {data.operation}
            </div>
        </div>
        
    )
}

export {Display as default};