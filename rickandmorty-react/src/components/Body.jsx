import React from "react";
import "./styles.css";

import Characters from "./Characters"

const Body = (props) => {
    const {onBigCharacter} = props.onClick;

    let filtered = props.data.characters;
    let big = props.data.characters;

    if (props.data.status === 1) {
        filtered = filtered.filter(char => char.status === "Alive");
    }
    else if (props.data.status === 2) {
        filtered = filtered.filter(char => char.status === "Dead");
    }

    if (props.data.textFilter != null) {
        filtered = filtered.filter(char => char.name.includes(props.data.textFilter));
    }
        
    if (props.data.bigCharacter != null) {
        big = big.find(char => char.name === (props.data.bigCharacter));
        console.log(props.data.bigCharacter);
        console.log(big);
    }

    return (
        <div>
            {props.data.bigCharacter === null ?
                <div>
                    {filtered.map(obj => <Characters onBigCharacter={onBigCharacter} image={obj.image} name={obj.name} status={obj.status} gender={obj.gender} key={obj.id}/>)}
                </div> : 
            <div>
                <Characters onBigCharacter={onBigCharacter} image={big.image} name={big.name} status={big.status} gender={big.gender} key={big.id}/>)}
            </div>
            }
            
        </div>
    )
}

export {Body as default};