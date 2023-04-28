import { useContext, useEffect } from 'react';
import { requestAccessToken } from '../services/accessToken';
import { AccessTokenContext } from '../context/accessToken';

export function useGetAccessToken() {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  const getToken = async () => {
    const newToken = await requestAccessToken();
    setAccessToken(newToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  return { accessToken };
}
