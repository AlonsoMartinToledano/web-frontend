import React, { useState } from "react";
import './App.css';

import Header from './components/Header';
import BodyThumbnails from './components/BodyThumbnails';
import BodyVideo from './components/BodyVideo';
import Right from './components/Right';

function App() {
  const [bodyMode, setBodyMode] = useState(0);
  const [search, setSearch] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDescription] = useState(null);

  const searchHandler = search => {
    setSearch(search);
    setBodyMode(1);
  }

  const onVideoHandler = (videoId, videoTitle, videoDescription) => {
    setVideoId(videoId);
    setVideoTitle(videoTitle);
    setVideoDescription(videoDescription);
    setBodyMode(2);
  }

  const onBackHandler = () => {
    setBodyMode(1);
  }

  const onYouTubeHandler = () => {
    setBodyMode(0);
  }

  const apiKey = "AIzaSyCUCprM9JssiEd13oq-JVvF3fuGKkLDIp8"
  
  let body = null;
  if (bodyMode === 1) {
    body = <BodyThumbnails search={search} apiKey={apiKey} onVideo={onVideoHandler}/>;
  } else if (bodyMode === 2) {
    body = 
      <div className="BodyPlay">
        <div className="Back" onClick={onBackHandler}>⬅</div>
        <BodyVideo id={videoId} title={videoTitle} description={videoDescription} />
        <Right id={videoId} apiKey={apiKey} onVideo={onVideoHandler}/>
      </div>
  }

  return (
    <div className="App">
      <Header search={searchHandler} youTube={onYouTubeHandler} />
      {body}
    </div>
  );
}

export default App;
