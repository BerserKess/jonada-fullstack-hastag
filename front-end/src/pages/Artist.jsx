import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/SongList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Artist = () => {
    const { id } = useParams();

    const { name, banner } = artistArray.filter(
        (artist) => artist._id === id
    )[0];


    const songsArrayFromArtist = songsArray.filter(
        (song) => song.artist === name
    );

    const randomIndex = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );

    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

    return (
        <section className='rounded-2xl container-margin overflow-hidden flex flex-col flex-1'>
            <div className='bg-cover bg-[position-y:15%] h-[40svh] p-6 flex items-end' style={{ backgroundImage: `linear-gradient(to bottom, #00000040, #00000040),url(${banner})` }}>
                <h2 className='text-8xl font-bold leading-[100%]'>{name}</h2>
            </div>

            <div className='flex-1 bg-body p-6 py-10 relative flex flex-col gap-6'>
                <h2 className='text-[#d2f9e0] text-2xl font-bold'>
                    Populares
                </h2>
                <SongList songsArray={songsArrayFromArtist} />
            </div>
            <Link to={`/song/${randomIdFromArtist}`}>
                <FaPlayCircle className="fixed z-10 right-6 bottom-6 text-5xl text-[#20df63] cursor-pointer " />
            </Link>
        </section >
    )
}

export default Artist