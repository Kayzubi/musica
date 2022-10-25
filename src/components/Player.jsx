import {
  IoIosShuffle,
  IoIosSkipBackward,
  IoIosPlay,
  IoIosPause,
  IoIosSkipForward,
  IoIosRepeat,
  IoIosVolumeHigh,
} from 'react-icons/io'
import { useState, useEffect, useContext } from 'react'
import MusicContext from '../contexts/MusicContext'

function Player() {
  const {
    currentTrack,
    trackQueue,
    trackIndex,
    isPlaying,
    isRepeat,
    isShuffled,
    playPauseTrack,
    toggleShuffle,
  } = useContext(MusicContext)

  const audio = new Audio(currentTrack)

  useEffect(() => {
    playTrack()
  }, [currentTrack])

  const playTrack = () => {
    audio.play()
  }

  return (
    <div className='player'>
      <div className='container'>
        <div className='player__now-playing'>
          <img src='' alt='' className='player__now-playing-img' />
          <div className='player__now-playing-details'>
            <p className='title'>Made in Lagos </p>
            <div className='artist'>Wizkid </div>
          </div>
        </div>
        <div className='player__controls'>
          <div className='player__buttons'>
            <button
              onClick={toggleShuffle}
              className={isShuffled ? `player-btn active` : `player-btn`}>
              <IoIosShuffle />
            </button>
            <button className='player-btn'>
              <IoIosSkipBackward />
            </button>
            <button
              onClick={playPauseTrack}
              className='player-btn player-btn-play'>
              {isPlaying ? <IoIosPause /> : <IoIosPlay />}
            </button>
            <button className='player-btn'>
              <IoIosSkipForward />
            </button>
            <button className='player-btn'>
              <IoIosRepeat />
            </button>
          </div>
          <div className='player__seek'>
            <input type='range' id='seek' min={0} max={100} value={10} />
          </div>
        </div>
        <div className='player__volume'>
          <IoIosVolumeHigh />
          <input type='range' name='volume' id='volume' />
        </div>
      </div>
    </div>
  )
}

export default Player
