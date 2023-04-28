import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useGetAccessToken } from '../hooks/useGetAccessToken';
import { useTracks } from '../hooks/useTracks';
import { useRef, useState } from 'react';
import '../styles/Tracks.css';
import { ArrowBack } from '../components/icons';
import Clock from '../assets/clock.svg';

function Tracks() {
  const { id } = useParams();
  const { accessToken } = useGetAccessToken();
  const navigate = useNavigate();
  const albumPoster = useLocation().state[0];
  const albumName = useLocation().state[1];
  const { tracks } = useTracks({ accessToken, id });

  // control play and pause

  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audio = useRef(null);

  const togglePlay = (track) => {
    const song = track;
    if (currentSong === song) {
      isPlaying ? audio.current.pause() : audio.current.play();
      setPlaying(!isPlaying);
    } else {
      if (audio.current) {
        audio.current.pause();
      }

      setCurrentSong(song);
      setPlaying(true);
      audio.current = new Audio(song);
      audio.current.play();
    }
  };

  return (
    <>
      <div
        className='album__poster'
        style={{ backgroundImage: `url(${albumPoster})` }}
      >
        <div className='btn__back' onClick={() => navigate(-1)}>
          <ArrowBack />
        </div>
        <h1 className='album__name'>{albumName}</h1>
      </div>

      <div className='album__title'>
        <h2># Title</h2>
        <img src={Clock} alt='' />
      </div>

      <ul className='tracks'>
        {tracks?.map((track) => {
          return (
            <li key={track.id} className='track'>
              <div>
                <h3
                  className='track__name'
                  onClick={() => togglePlay(track.preview_url)}
                  style={{
                    backgroundColor:
                      currentSong === track.preview_url ? 'green' : 'black',
                  }}
                >
                  {track.track_number}) {track.name}
                </h3>
              </div>

              <div>
                <p>{Math.round((track.duration_ms / 60000) * 100) / 100}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Tracks;
