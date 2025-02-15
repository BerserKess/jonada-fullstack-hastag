import axios from "axios";

// CONEXÃO FRONT-BACK
const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
// console.log(responseArtists.data)