import React, { useContext } from "react";
import AppContext from "../AppContext";

import MyRepositories from "./MyRepositories";
import MyFollowers from "./MyFollowers";
import Following from "./Following";
import SearchByUser from "./SearchByUser";
import CreateRepository from "./CreateRepository";
import "./styles.css";

const Body = () => {
    const context = useContext(AppContext);

    let body;
    if (context.bodyMode.get === 0) {
        body = <MyRepositories />
    } else if (context.bodyMode.get === 1) {
        body = <MyFollowers />
    } else if (context.bodyMode.get === 2) {
        body = <Following />
    } else if (context.bodyMode.get === 3) {
        body = <SearchByUser />
    } else if (context.bodyMode.get === 4) {
        body = <CreateRepository />
    }

    return (
        <div className="Body">
            {body}
        </div>
    )
}

export default Body;