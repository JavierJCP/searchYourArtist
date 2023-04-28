import { useEffect, useState } from 'react';
import { useGetAccessToken } from '../hooks/useGetAccessToken';
import { searchArtist } from '../services/searchArtists';
import Artists from '../components/Artists';
import '../styles/Home.css';
import { Logo } from '../components/icons';

function Home() {
  const { accessToken } = useGetAccessToken();
  const [inputSearch, setInputSearch] = useState('');
  const [artists, setArtists] = useState([]);

  const handleChangeSearch = (e) => {
    const newSearch = e.target.value;
    setInputSearch(newSearch);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArtist = await searchArtist({ inputSearch, accessToken });
    setArtists(newArtist);
  };

  useEffect(() => {
    if (!accessToken) return;

    searchArtist({ inputSearch: 'michael jackson', accessToken }).then((res) =>
      setArtists(res)
    );
  }, [accessToken]);

  return (
    <>
      <header>
        <h1 className='title'>
          Find your Artist <Logo />
        </h1>

        <form onSubmit={handleSubmit} className='input__group'>
          <input
            onChange={handleChangeSearch}
            type='text'
            name='text'
            className='input'
            placeholder='michael jackson, ...'
            autoComplete='off'
          />
        </form>
      </header>
      <Artists artists={artists} />
    </>
  );
}

export default Home;
