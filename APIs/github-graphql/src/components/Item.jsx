import React from "react";

import "./styles.css";

const Item = props => {
    const {name} = props;

    return (
        <div>
            {name ? <div className="Item">{name}</div> : null}
        </div>
    )
}

export default Item;