import React, { useState, useEffect } from "react";
import axios from 'axios';

import Thumbnail from './Thumbnail';
import "./styles.css";

const BodyThumbnails = props => {
    const {search, onVideo, apiKey} = props;

    const [content, setContent] = useState(null);

    const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=20&q=${search}`

    useEffect(() => {
        axios.get(youtubeURL).then(response => {
            setContent(response.data);
        })
        return () => {}
    }, [search])

    let results = null;
    if (content) {
        results = content.items.map(obj => {
            return <Thumbnail thumbnail={obj.snippet.thumbnails.high.url}
                title={obj.snippet.title}
                description={obj.snippet.description}
                id={obj.id.videoId}
                onVideo={onVideo}
                key={obj.id.videoId} />
        })
    }

    return (
        <div className="Body">
            {results}
        </div>
    )
}

export {BodyThumbnails as default};