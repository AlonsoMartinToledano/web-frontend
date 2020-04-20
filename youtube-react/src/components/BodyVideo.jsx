import React from "react";

import "./styles.css";

const BodyVideo = props => {
    const {id, title, description} = props;

    const src = `https://www.youtube.com/embed/${id}`
    return (
        <div className="BodyVideo">
            <div className="VideoContent">
                <iframe className="Video" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <div className="TitleVideo">{title}</div>
                <div className="DescriptionVideo">{description}</div>
            </div>
        </div>
    )
}

export {BodyVideo as default};