export async function searchArtist({ inputSearch, accessToken }) {
  const searchParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  };

  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${inputSearch}&type=artist`,
    searchParameters
  );
  const data = await res.json();
  return data.artists.items;
}
