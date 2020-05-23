import React, { useContext } from "react";
import AppContext from "../AppContext";

import "./styles.css";

const Character = props => {
    const {image, name, characterId} = props;
    const context = useContext(AppContext);

    return (
        <div className="Character" onClick={() => context.characterId.set(characterId)}>
            <img className="CharacterImg" src={image} alt={name}/>
            <div>{name}</div>
        </div>
    )
}

export default Character;