// VideoPlayer.js
import React from 'react';
import style from './VideoPlayer.module.css'; // Ensure you have this CSS file with styles for the video player

const VideoPlayer = ({ src, onTimeUpdate, onLoadedMetadata, videoRef }) => {
  return (
    <video
      ref={videoRef}
      src={src}
      onLoadedMetadata={onLoadedMetadata}
      controls
      onTimeUpdate={onTimeUpdate}
      className={`${style.videoPlayer}`} />
  );
};

export default VideoPlayer;
