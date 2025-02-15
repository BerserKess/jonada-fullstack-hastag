import React, { useState } from 'react'
import SongItem from './SongItem'

const SongList = ({ songsArray }) => {
    const [items, setItems] = useState(5);

    return (
        <div className='flex flex-col'>
            {songsArray.filter((currentValue, index) => index < items).map((songObj, index) => <SongItem key={index} index={index} {...songObj} />)}

            <p className='ml-5 mt-5 font-bold cursor-pointer hover:text-[#79eca1]' onClick={() => { setItems(items + 5) }}>
                Ver mais
            </p>
        </div>
    )
}

export default SongList