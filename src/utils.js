export const playAudio = (isPlaying, audioRef) => {
  //check if the song is playing
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    //if is not loaded yet
    if (playPromise !== undefined) {
      //if is not loaded yet, wait a bit(like await)
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
