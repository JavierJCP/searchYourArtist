import '../styles/Artists.css';
import { PlayIcon } from './icons';
import { useNavigate } from 'react-router-dom';

function Artists({ artists }) {
  const navigate = useNavigate();

  return (
    <main>
      {artists?.length > 0 ? (
        <ul className='artists'>
          {artists?.map((artist) => (
            <li
              className='artist'
              key={artist.id}
              onClick={() =>
                navigate(`/albums/${artist.id}`, {
                  state: [
                    artist.images[0].url,
                    artist.followers.total,
                    artist.name,
                  ],
                })
              }
            >
              <h3>{artist.name}</h3>
              {artist.images.length > 0 ? (
                <img src={artist.images[0].url} alt={`${artist.name} poster`} />
              ) : (
                <p style={{ marginTop: '3rem' }}>No images</p>
              )}
              <span>
                <PlayIcon className='play__btn' />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No artist found</h3>
      )}
    </main>
  );
}

export default Artists;
