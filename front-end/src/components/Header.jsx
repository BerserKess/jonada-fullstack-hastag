import { Link } from "react-router-dom"
import spotifyLogo from "../assets/img/spotify-logo.png"

import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between px-3 py-6">
            <Link to="/">
                <img src={spotifyLogo} alt="Logo do spotify" />
            </Link>
            <h1 className="font-[Montserrat] text-3xl font-bold leading-7 text-[#d2f9e0]">Musicfy</h1>
        </header>
    )
}

export default Header