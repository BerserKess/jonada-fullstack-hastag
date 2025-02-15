import React from 'react'
import MusicPlayer from '../components/MusicPlayer'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'


const Song = () => {
    const { id } = useParams();


    const { name, image, artist, duration, audio } = songsArray.filter(
        (song) => song._id === id
    )[0];

    const artistObj = artistArray.filter(
        (currentArtist) => currentArtist.name === artist
    )[0];

    // CRIAR INDEX ALEATORIO

    const songsArrayFromArtist = songsArray.filter(
        (song) => song.artist === artist
    );

    const randomIndex = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomIndex2 = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );

    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2FromArtist = songsArrayFromArtist[randomIndex]._id;

    return (
        <section className='grid grid-rows-1 flex-1 '>
            <div className='flex flex-col bg-body gap-10 my-0 mx-4 p-6 rounded-2xl rounded-b-none '>
                <div className=' flex items-center justify-center flex-1 '>
                    <img className='shadow-[0_0_20px_10px_#020b0580] w-[300px]' src={image} alt={`Imagem da música ${name}`} />
                </div>
            </div>

            <div className='bg-[#020b05] py-4 px-6 grid grid-cols-[1fr_3fr_1fr] place-items-center flex-col gap-6 text-[#d2f9e0]'>
                <Link to={`/artist/${artistObj._id}`} className='justify-self-start rounded-xl overflow-hidden'>
                    <img className='w-20 h-20' src={artistObj.image} alt={`Imagem do artista ${artist}`} />

                </Link>

                <MusicPlayer duration={duration} randomIdNext={randomIdFromArtist} randomIdBack={randomId2FromArtist} audio={audio} />

                <div>
                    <p className='text-xl font-bold'>{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </section>
    )
}

export default Song