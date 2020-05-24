import React from "react";

import "./styles.css";

const Item = props => {
    const {name, dialog} = props;

    return (
        <div className="Item">
            <div>{name}</div>
            <div>{dialog}</div>
        </div>
    )
}

export default Item;