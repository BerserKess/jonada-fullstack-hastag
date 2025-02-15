import { artistArray } from '../../front-end/src/assets/database/artists.js'
import { songsArray } from '../../front-end/src/assets/database/songs.js'
import { database } from './connect.js';

const newArtistArray = artistArray.map((artist) => {
    const newArtist = { ...artist };
    delete newArtist.id;

    return newArtist;
});
const newSongsArray = songsArray.map((song) => {
    const newSong = { ...song };
    delete newSong.id;

    return newSong;
});

// INSERIR DADOS NO DB
const songsResponse = await database.collection("songs").insertMany(newSongsArray);
const artistsResponse = await database.collection("artists").insertMany(newArtistArray);

console.log(songsResponse)
console.log(artistsResponse)