import React from 'react';
import "./styles.css";

const TextFilter = (props) => {
    const {textFilter} = props;

    return (
        <div>
            <input className="TextFilter" type="text" onChange={textFilter} />
        </div>
    )
}

export {TextFilter as default};