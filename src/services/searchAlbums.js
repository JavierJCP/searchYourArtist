export async function searchAlbums({ id, searchParameters }) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=ES&limit=50`,
    searchParameters
  );
  const data = await res.json();
  return data.items;
}
