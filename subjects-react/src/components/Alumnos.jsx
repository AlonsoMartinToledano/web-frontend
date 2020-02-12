import React from "react";

const Alumnos = (props) => {
    const {nombre, nota, view} = props;

    return (
        <div>
            {view ? <p>{nombre} {nota}</p> : null}
        </div>
    )
}

export {Alumnos as default}