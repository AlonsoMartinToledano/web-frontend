import React from 'react';
import "./styles.css";

const Display = (props) => {
    const {data} = props;
    return (
        <div className="Display">
            {data.operation}
        </div>
    )
}

export {Display as default};