import React, { useRef, useState, useEffect } from 'react'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
};
const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);

    return seconds + minutes * 60;
}

const MusicPlayer = ({ duration, randomIdNext, randomIdBack, audio }) => {
    const audioPlayer = useRef();
    const progressBar = useRef()
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const durationInSeconds = timeInSeconds(duration);

    const playPause = () => {
        if (audioPlayer.current) {
            isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
            setIsPlaying(!isPlaying);
            setCurrentTime(formatTime(audioPlayer.current.currentTime));
            // console.log(currentTime);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isPlaying && audioPlayer.current)
                setCurrentTime(formatTime(audioPlayer.current.currentTime));



        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [isPlaying]);


    return (
        <div className='flex flex-col gap-1.5 items-center justify-self-stretch'>
            <div className='flex items-center gap-5 text-2xl'>
                <Link to={`/song/${randomIdBack}`}>
                    <FaBackwardStep className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63]" />
                </Link>
                {
                    isPlaying ? <FaPauseCircle className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63] text-4xl" onClick={playPause} /> : <FaPlayCircle className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63] text-4xl" onClick={playPause} />
                }

                <Link to={`/song/${randomIdNext}`}>
                    <FaForwardStep className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63]" />
                </Link>
            </div>
            <div className='flex items-center gap-2.5 w-full max-w-[600px]  '>
                <p className='font-mono'>{currentTime}</p>
                <div className='h-1 bg-gray-500 w-full rounded-2xl'>
                    <div ref={progressBar} className='h-full bg-green-500 transition-[width] duration-[ease_ease]' style={{ width: `${audioPlayer.current ? (audioPlayer.current.currentTime / durationInSeconds) * 100 : 0}%` }}></div>
                </div>
                <p className='font-mono'>{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    )
}

export default MusicPlayer