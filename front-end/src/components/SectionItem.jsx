import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SectionItem = ({ _id, name, image, artist, idPath }) => {
    return (
        <Link to={`${idPath}/${_id}`} className="flex flex-col items-center gap-6 px-4 py-6 rounded-2xl hover:bg-[#020b0580] cursor-pointer group ">
            <div className="relative ">
                <div className="w-[140px] h-[140px] rounded-[50%] overflow-hidden flex items-center justify-center">
                    <img src={image} alt="" />
                </div>
                <FaPlayCircle className="absolute z-10 right-2 bottom-2 text-5xl text-[#20df63] transition duration-200 ease-in-out opacity-0 translate-y-2 cursor-pointer group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-base line-clamp-2 overflow-hidden">{name}</p>
                {/* Se artista for undefined use ele mesmo */}
                <p className="text-sm">{artist ?? "Artista"}</p>

            </div>

        </Link>
    )
}

export default SectionItem