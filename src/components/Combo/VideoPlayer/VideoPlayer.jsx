// VideoPlayer.js
import React from 'react';
import style from './VideoPlayer.module.css'; // Ensure you have this CSS file with styles for the video player

const VideoPlayer = ({ src, onTimeUpdate, onLoadedMetadata }) => {
  return (
    <video
      src={src}
      onLoadedMetadata={onLoadedMetadata}
      controls
      onTimeUpdate={onTimeUpdate}
      className={`${style.videoPlayer}`} />
  );
};

export default VideoPlayer;
