import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Albums.css';
import { useAlbums } from '../hooks/useAlbums';
import { ArrowBack, PlayIcon } from '../components/icons';

function Albums() {
  const navigate = useNavigate();
  const poster = useLocation().state[0];
  const followers = useLocation().state[1];
  const artistName = useLocation().state[2];
  const { albums } = useAlbums();

  return (
    <>
      <div
        className='poster'
        style={{
          backgroundImage: `url(${poster}) `,
        }}
      >
        <p className='followers'>
          <h3>Followers: {followers}</h3>
        </p>

        <div className='btn__back' onClick={() => navigate(-1)}>
          <ArrowBack />
        </div>
      </div>

      <div className='name__albums'>
        <h1>{artistName} albums</h1>
      </div>

      <div className='albums__container'>
        <ul className='albums'>
          {albums?.map((album) => (
            <li
              className='album'
              key={album.id}
              onClick={() =>
                navigate(`/tracks/${album.id}`, {
                  state: [album.images[0].url, album.name],
                })
              }
            >
              <div>
                <h3>{album.name}</h3>
                <p>
                  release_date:
                  {album.release_date}
                </p>
              </div>

              <div className='album__img__container'>
                {album.images.length > 0 ? (
                  <img src={album.images[1].url} alt='album image' />
                ) : (
                  <p>no images</p>
                )}

                <span>
                  <PlayIcon className='play__btn' />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Albums;
