import React, { useState, useRef } from 'react';
import './AddList.css';

function Player() {
  const audioRef = useRef(); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play/Pause function
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time as audio plays
  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Seek function to update audio playback position
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // When audio metadata is loaded (duration available)
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div>
      <div>
        <div className="player">
          <div className="top">
            <button className="small" onClick={togglePlay}>
              <div className="inner_button">
                <img style={{ height: 10 }} src="play_icon_url" alt="Play" />
              </div>
            </button>
            <p className="indicator">{isPlaying ? 'PLAYING NOW' : 'PAUSED'}</p>
            <button className="small">
              <div className="inner_button">
                <img style={{ height: 10 }} src="next_icon_url" alt="Next" />
              </div>
            </button>
          </div>
          <div className="center">
            <img className="album" src="album_cover_url" alt="Album Cover" />
          </div>
          <div className="song_details">
            <div style={{ fontSize: 20 }}>Song Name</div>
            <div style={{ marginTop: 7, fontSize: 10 }}>Artist Name</div>
          </div>
          <div className="slider">
            <div className="time">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
            <div className="slider_bar">
              <input
                type="range"
                className="inner_slider_bar"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
              />
            </div>
          </div>
          <div className="controls">
            <button className="big">
              <div className="inner_button_big">
                <img style={{ height: 15, transform: 'scale(-1)' }} src="rewind_icon_url" alt="Rewind" />
              </div>
            </button>
            <button className="big_play_pause" onClick={togglePlay}>
              <div className="playpause">
                <img style={{ height: 15 }} src={isPlaying ? "pause_icon_url" : "play_icon_url"} alt="Play/Pause" />
              </div>
            </button>
            <button className="big">
              <div className="inner_button_big">
                <img style={{ height: 15 }} src="forward_icon_url" alt="Forward" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="description">
        Recreating Dribble shot of <br />
        <a href="https://dribbble.com/shots/9338617-Simple-Music-Player">- Simple Music Player by Filip Legierski for Riotters</a> <br />
        - Icons are taken from <a href="www.flaticon.com">flaticon.com</a><br />
        Props to Filip Legierski for the amazing design :D
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="your_audio_source.mp3"
        onTimeUpdate={updateTime}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}

// Function to format time (convert seconds to mm:ss format)
function formatTime(time) {
  if (isNaN(time)) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default Player;
