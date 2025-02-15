
import React from 'react'
import SectionList from './SectionList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const MainSection = ({ type }) => {
    return (
        <main className="flex flex-col flex-1 gap-10 bg-body container-margin p-6 rounded-2xl">
            {type === "artists" || type === undefined ? <SectionList title="Artistas" items={7} dataArray={artistArray} path='/artists' idPath='/artist' /> : (<></>)}

            {type === "songs" || type === undefined ? <SectionList title="Músicas" items={14} dataArray={songsArray} path='/songs' idPath='/song' /> : (<></>)}

        </main>
    )
}

export default MainSection
