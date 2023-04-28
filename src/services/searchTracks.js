export async function searchTracks({ id, searchParameters }) {
  const res = await fetch(
    `https://api.spotify.com/v1/albums/${id}/tracks`,
    searchParameters
  );
  const json = await res.json();
  return json.items;
}
