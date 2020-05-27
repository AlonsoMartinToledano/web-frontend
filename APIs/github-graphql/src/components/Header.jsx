import React, { useContext } from "react";
import AppContext from "../AppContext";

import "./styles.css";

const Header = () => {
    const context = useContext(AppContext);

    return (
        <div className="Header">
            <div className={context.bodyMode.get === 0 ? "ButtonSelected" : "Button"} onClick={() => context.bodyMode.set(0)}>My Repositories</div>
            <div className={context.bodyMode.get === 1 ? "ButtonSelected" : "Button"} onClick={() => context.bodyMode.set(1)}>My Followers</div>
            <div className={context.bodyMode.get === 2 ? "ButtonSelected" : "Button"} onClick={() => context.bodyMode.set(2)}>Following</div>
            <div className="Search">
                <input id="search" placeholder="Username" className="Input"/>
                <div className="Button" onClick={() => {context.searchUser.set(document.getElementById("search").value); context.bodyMode.set(3);}}>Search</div>
            </div>
            <div className={context.bodyMode.get === 4 ? "ButtonSelected" : "Button"} onClick={() => context.bodyMode.set(4)}>Create Repository</div>
            <div className="Button" onClick={() => {localStorage.setItem("token", (null)); context.bodyMode.set(null); context.mode.set(0);}}>Log Out</div>
        </div>
    )
}

export default Header;