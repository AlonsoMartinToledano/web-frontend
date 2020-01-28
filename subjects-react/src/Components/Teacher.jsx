import React from 'react';

import "./Styles.css"

const teacher = (props) => {
    return (
        <div className="Teacher">
            <h2>Profesor: {props.teacher}</h2>
        </div>
    )
}

export default teacher;