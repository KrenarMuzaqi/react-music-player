import React, { useState } from "react";

//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";

//Import Styles
import "./styles/app.scss";

//Import Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
