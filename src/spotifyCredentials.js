
export const auth = "https://accounts.spotify.com/authorize";

const Uri = "http://localhost:3000/";
const clientID = "636a011e2fce4d8aa776d41200267f60";
const scopes = [
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getToken = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };


export const loginUrl = `${auth}?client_id=${clientID}&redirect_uri=${Uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;