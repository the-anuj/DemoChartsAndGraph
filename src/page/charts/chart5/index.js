import React, { useState } from 'react';

const DummyVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"; // Example dummy video URL

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Dummy Video Player</h2>
      <button onClick={handlePlayButtonClick}>Play</button>
      <div style={{ position: 'relative', width: '100%', height: '500px', marginTop: '20px' }}>
        {isPlaying && (
          <>
            <iframe
              src={videoUrl}
              width="100%"
              height="500px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: 'none' }}
              title="Dummy Video Player"
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                zIndex: 1,
              }}
              onContextMenu={(e) => e.preventDefault()} // Prevent context menu from appearing
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DummyVideoPlayer;
