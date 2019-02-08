import React from "react";
import "./VideoItem.css"

const VideoItem = ({video, onVideoSelect}) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">

            <img className={"ui image"} alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className={"content"}>
                <p> {video.snippet.title}</p>
            </div>
        </div>
    );
}

export default VideoItem;