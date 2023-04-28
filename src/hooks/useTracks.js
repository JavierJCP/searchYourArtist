import { useEffect, useState } from 'react';
import { searchTracks } from '../services/searchTracks';

export function useTracks({ accessToken, id }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    searchTracks({ id, searchParameters }).then((res) => setTracks(res));
  }, [id]);
  return { tracks };
}
