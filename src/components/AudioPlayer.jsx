import { useState } from 'react';

export function AudioPlayer({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  return (
    <div>
      <audio src={currentSong.preview_url} controls />
      <h2>{currentSong.name}</h2>
      <button onClick={() => setCurrentSongIndex(currentSongIndex - 1)}>
        Anterior
      </button>
      <button onClick={() => setCurrentSongIndex(currentSongIndex + 1)}>
        Siguiente
      </button>
    </div>
  );
}
