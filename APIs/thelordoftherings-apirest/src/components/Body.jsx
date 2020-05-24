import React, { useContext } from "react";
import AppContext from "../AppContext";

import Item from "./Item";
import "./styles.css";

const Body = () => {
    const context = useContext(AppContext);

    let body;
    if (context.data.get) {
        body = context.data.get.map(obj => {
            return <Item name={obj.name} dialog={obj.dialog} key={obj._id}/>
        })
    }

    return (
        <div className="Body">
            {body}
        </div>
    )
}

export default Body;