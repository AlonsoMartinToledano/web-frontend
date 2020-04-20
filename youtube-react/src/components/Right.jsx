import React, { useState, useEffect } from "react";
import axios from 'axios';

import Thumbnail from './Thumbnail';
import "./styles.css";

const Right = props => {
    const {id, apiKey, onVideo} = props;

    const [content, setContent] = useState(null);

    const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${apiKey}`

    useEffect(() => {
        axios.get(youtubeURL).then(response => {
            setContent(response.data);
        })
        return () => {}
    }, [id])

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
        <div className="Right">
            {results}
        </div>
    )
}

export {Right as default};