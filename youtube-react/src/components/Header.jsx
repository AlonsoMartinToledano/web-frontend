import React, { useState, useEffect } from "react";

import "./styles.css";

const Header = props => {
    const {search, youTube} = props;

    const [toSearch, setToSearch] = useState(null);

    const searchHandler = event => {
        setToSearch(event.target.value);
    }

    return (
        <div className="Header">
            <img className="YouTubeImg" src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/youtube-icon.png" alt="YouTube" onClick={youTube} />
            <div className="HeaderSearch">
                <input className="Search"  onChange={searchHandler}/>
                <div className="MagnifyingGlass" onClick={() => search(toSearch)}>🔍</div>
            </div>
        </div>
    )
}

export {Header as default};