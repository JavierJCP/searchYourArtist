import { createContext, useState } from 'react';

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  const [accessToken, setAccessToken] = useState('');
  return (
    <AccessTokenContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
}
