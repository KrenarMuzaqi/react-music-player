import React, { useState, useRef } from "react";

//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Import Styles
import "./styles/app.scss";

//Import Data
import data from "./data";

function App() {
   //Ref
   const audioRef = useRef(null);


  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);


    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
    });


    
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
      audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} //to show duration before we have played the music
      ></audio>
    </div>
  );
}

export default App;
