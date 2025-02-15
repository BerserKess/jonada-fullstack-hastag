import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
    return (
        <Link to={`/song/${_id}`} className='flex gap-6 items-center justify-between cursor-pointer py-2.5 px-2.5 transition duration-200 ease-in hover:bg-green-900 hover:text-[#79eca1]'>
            <div className='flex items-center gap-6'>
                <p>{index + 1}</p>
                <div className='flex gap-3 items-center'>
                    <img className='max-w-10 rounded-sm' src={image} alt={`Imagem da Música ${artist}`} />
                    <p className='font-medium '>{name}</p>
                </div>
            </div>
            <p className='justify-end'>{duration}</p>
        </Link>
    )
}

export default SongItem