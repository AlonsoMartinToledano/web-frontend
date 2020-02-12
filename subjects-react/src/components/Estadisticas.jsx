import React from 'react';

const Estadisticas = (props) => {
    const {alumnos, view} = props;

    let media = 0;
    alumnos.map(obj => media += obj.nota);
    const notaMedia = media/alumnos.length;

    const arrayNotas = [];
    alumnos.map(obj => arrayNotas.push(obj.nota));
    const notaMaxima = Math.max.apply(null, arrayNotas);
    const notaMinima = Math.min.apply(null, arrayNotas);

    return (
        <div>
            {view ? 
                <div className="Estadisticas">
                    <p>Nota Máxima: {notaMaxima}</p>
                    <p>Nota Mínima: {notaMinima}</p>
                    <p>Nota Media: {notaMedia.toFixed(2)}</p>
                </div>
                : null
            }
            
        </div>
    )
}

export {Estadisticas as default};