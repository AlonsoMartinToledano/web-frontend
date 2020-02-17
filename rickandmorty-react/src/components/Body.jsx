import React from "react";
import "./styles.css";

import Characters from "./Characters"

const Body = (props) => {
    const {onBigCharacter} = props.onClick;

    let filtered = props.data.characters;
//    let big;

    if (props.data.status === 1) {
        filtered = filtered.filter(char => char.status === "Alive");
    }
    else if (props.data.status === 2) {
        filtered = filtered.filter(char => char.status === "Dead");
    }

    if (props.data.textFilter != null) {
        filtered = filtered.filter(char => char.name.includes(props.data.textFilter));
    }

    return (
        <div className="Body">
            {filtered.map(obj => <Characters onBigCharacter={onBigCharacter} image={obj.image} name={obj.name} status={obj.status} gender={obj.gender} key={obj.id}/>)}
        </div>
    )
}

export {Body as default};