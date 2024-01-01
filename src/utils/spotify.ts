export const authEndpoint = "https://accounts.spotify.com/authorize?";
export const clientId = "88a3c33c8ffd49388fdb62b88783596c";
export const redirectUri = "http://localhost:3000/auth\n";
export const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20",
)}&response_type=token&show_dialog=true`;
