import React from "react";
import "./styles.css";

const Characters = (props) => {
    const {onBigCharacter, image, name, status, gender, width, height} = props;

    return (
        <div className="Character" onClick={ () => onBigCharacter({name}) }>
            <img src={image} alt={name} width={width} height={height}/>
            <div className="Name" >{name}</div>
            <div>{gender}</div>
            <div>{status}</div>
        </div>
    )
}

export {Characters as default};