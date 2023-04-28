export async function requestAccessToken() {
  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`,
  };
  try {
    const res = await fetch(
      `https://accounts.spotify.com/api/token`,
      authParameters
    );
    const data = await res.json();
    return data.access_token;
  } catch (error) {
    throw new Error('request token error');
  }
}
