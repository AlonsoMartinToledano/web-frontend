import React from 'react';

import "./styles.css";

const Thumbnail = props => {
    const {thumbnail, title, description, id, onVideo} = props;

    return (
        <div className="ThumbnailGrid">
            <div className="Thumbnail" onClick={() => onVideo(id, title, description)}>
                <img className="ImageThumbnail" src={thumbnail} alt={title} />
                <div className="Title">{title}</div>
                <div className="Description">{description}</div>
            </div>
        </div>
    )
}

export {Thumbnail as default};