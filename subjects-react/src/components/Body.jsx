import React from "react";
import Asignatura from "./Asignatura"

const Body = (props) => {
    const asignaturas = props.data.asignaturas;
    let filtered = props.data.curso === 0 ? asignaturas : asignaturas.filter( asig => props.data.curso === asig.curso);
    if (props.data.buscarAsignatura != null){
        filtered = filtered.filter(asig => asig.asignatura.includes(props.data.buscarAsignatura));
    }
    return (
        <div>
            {
                filtered.map(obj => <Asignatura asignatura={obj} key={obj.id}/>)
            }
        </div>
    )
}

export {Body as default}