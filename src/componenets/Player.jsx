import React, { useState, useRef, useEffect } from 'react';
import "./Player.css";

const Player = () => {
  const tracks = [
    { name: "Hass Hass - Diljit Dosanjh X Sia", src: "https://od.lk/s/NTJfNDY3NzI1NjJf/Hass%20Hass%20%28Official%20Video%29%20Diljit%20X%20Sia.mp3" },
    { name: "Do You Know - Diljit Dosanjh", src: "https://od.lk/s/NTJfNDY3NzI3NzNf/diljit-dosanjh-do-you-know-lyric-video-latest-punjabi-song-128-ytshorts.savetube.me.mp3" },
    { name: "Ride It - Jay Sean", src: "https://od.lk/s/NTJfNDY3NzI2MjRf/Ride-It-%28Hindi-Version%29%28PagalWorld%29.mp3" },
    { name: "Akhiyaan Gulaab - Mitraz", src: "https://od.lk/s/NTJfNDY3NzI3NTJf/akhiyaan-gulaab-song-shahid-kapoor-kriti-sanon-mitraz-teri-baaton-mein-aisa-uljha-jiya-128-ytshorts.savetube.me.mp3" },
    { name: "Brown Rangs - Honey Singh", src: "https://od.lk/s/NTJfNDY3NzI4NTdf/Brown%20Rang%20-%20Yo%20Yo%20Honey%20Singh.mp3https://od.lk/s/NTJfNDY3NzI4NTdf/Brown%20Rang%20-%20Yo%20Yo%20Honey%20Singh.mp3" },
    { name: "Tere Pyar Main - Arijit Singh", src: "https://od.lk/s/NTJfNDY3NzI5MDBf/tere-pyaar-mein-full-video-tu-jhoothi-main-makkaar-ranbir-shraddha-pritam-arijit-nikhita-amitabh-128-ytshorts.savetube.me.mp3" },
    { name: "Safari - serena", src: "https://od.lk/s/NTJfNDY3NzM3MTNf/birds-of-prey-2020-joker-serena-safari-song-128-ytshorts.savetube.me.mp3" },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', updateTime);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    setIsPlaying(false); // To reset play/pause button
  };

  const prevTrack = () => {
    setCurrentTrackIndex(
      (currentTrackIndex - 1 + tracks.length) % tracks.length
    );
    setIsPlaying(false); // To reset play/pause button
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className="wrapper" id="theme" aria-valuetext="dark">
        {/* control theme */}
        <div className="theme-control-container">
          <div id="switch" className="switch">
            <div id="slider" className="slider" onClick={() => {}} />
          </div>
        </div>
        {/* main container for player and visualizer */}
        <div className="container">
          {/* for orange circle */}
          <div className="container-circle1">
            <div className="outer-circle1">
              <div id="inner-circle1" className="inner-circle1">
              </div>
            </div>
          </div>
          {/* for blue circle */}
          <div className="container-circle2">
            <div className="outer-circle2">
              <div id="inner-circle2" className="inner-circle2">
              </div>
            </div>
          </div>
          {/* music player starts here  */}
          <div id="music-player" className="rectangle">
            {/* album logo */}
            <div id="music-logo" className="music-logo">
              <i className="fas fa-music" />
            </div>
            {/* track length */}
            <div id="controls" className="controls">
              <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100}%` }} />
            </div>

            {/* time */}
            <div id="controls-time" className="controls-time">
              <div className="starts-time">{formatTime(currentTime)}</div>
              <div className="ends-time">{formatTime(duration)}</div>
            </div>
            {/* song name */}
            <div id="music-name" className="music-name">{tracks[currentTrackIndex].name}</div>
            {/* player button and controls */}
            <div id="player-btn" className="player-btn">
              <i className="fas fa-backward" onClick={prevTrack} />
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} onClick={playPause} />
              <i className="fas fa-forward" onClick={nextTrack} />
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].src}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Player;
