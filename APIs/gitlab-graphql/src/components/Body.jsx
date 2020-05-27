import React, { useContext } from "react";
import AppContext from "../AppContext";

import MyRepositories from "./MyRepositories";
import MyData from "./MyData";
import SearchRepositories from "./SearchRepositories";
import "./styles.css";

const Body = () => {
    const context = useContext(AppContext);

    let body;
    if (context.bodyMode.get === 0) {
        body = <MyRepositories />
    } else if (context.bodyMode.get === 1) {
        body = <MyData />
    } else if (context.bodyMode.get === 2) {
        body = <SearchRepositories />
    }

    return (
        <div className="Body">
            {body}
        </div>
    )
}

export default Body;