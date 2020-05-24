import React from "react";

import "./styles.css";

const Film = props => {
    const {title, episode, selectFilm} = props;

    return (
        <div className="Film" onClick={() => selectFilm(episode)}>
            <div className="Title">{title}</div>
            <div>{`Episode: ${episode}`}</div>
        </div>
    )
}

export default Film;