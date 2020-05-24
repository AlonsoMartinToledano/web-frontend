import React from "react";

import "./styles.css";

const Place = props => {
    const {name, coordinates, setCoordinates, setPlaceName} = props;

    return (
        <div className="Place" onClick={() => {setCoordinates(coordinates); setPlaceName(name);}}>
            {name}
        </div>
    )
}

export default Place;