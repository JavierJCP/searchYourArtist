import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchAlbums } from '../services/searchAlbums';
import { useGetAccessToken } from './useGetAccessToken';

export function useAlbums() {
  const { id } = useParams();
  const { accessToken } = useGetAccessToken();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    searchAlbums({ id, searchParameters }).then((res) => setAlbums(res));
  }, [id]);

  return { albums };
}
