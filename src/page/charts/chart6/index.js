import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const DummyVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"; // Example dummy video URL

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Dummy Video Player</h2>
      <button onClick={handlePlayButtonClick}>Play</button>
      {isPlaying && (
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          playing
          onContextMenu={handleContextMenu} // Prevent context menu from appearing
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload' // Disable download option in context menu
              }
            }
          }}
        />
      )}
    </div>
  );
};

export default DummyVideoPlayer;
