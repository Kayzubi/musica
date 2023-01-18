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
    audioPlayer,
    currentTrack,
    currentTime,
    isPlaying,
    isRepeat,
    isShuffled,
    playPauseTrack,
    toggleShuffle,
    toggleRepeat,
    nextTrack,
    previousTrack,
    setCurrentTime,
  } = useContext(MusicContext)

  const [volume, setVolume] = useState(80)

  // useEffect(() => {
  //   audioPlayer.volume = volume / 100
  // }, [volume, audioPlayer])

  const seekTo = (e) => {
    let time = (e.target.value / 100) * 30
    audioPlayer.currentTime = Math.round(time)
    setCurrentTime(Math.round(e.target.value))
  }

  const handleVolumeChange = (e) => {
    setVolume(Math.round(e.target.value))
    console.log(e.target.value)
  }

  return (
    <div className='player'>
      <div className='container'>
        <audio
          id='audio-player'
          src={currentTrack && currentTrack.preview}></audio>
        <div className='player__now-playing'>
          <img
            src={currentTrack && currentTrack.album.cover}
            alt=''
            className='player__now-playing-img'
          />
          <div className='player__now-playing-details'>
            <p className='title'> {currentTrack && currentTrack.title}</p>
            <div className='artist'>
              {currentTrack && currentTrack.artist.name}
            </div>
          </div>
        </div>
        <div className='player__controls'>
          <div className='player__buttons'>
            <button
              onClick={toggleShuffle}
              className={isShuffled ? `player-btn active` : `player-btn`}>
              <IoIosShuffle />
            </button>
            <button onClick={previousTrack} className='player-btn'>
              <IoIosSkipBackward />
            </button>
            <button
              onClick={playPauseTrack}
              className='player-btn player-btn-play'>
              {isPlaying ? <IoIosPause /> : <IoIosPlay />}
            </button>
            <button onClick={nextTrack} className='player-btn'>
              <IoIosSkipForward />
            </button>
            <button
              onClick={toggleRepeat}
              className={isRepeat ? `player-btn active` : `player-btn`}>
              <IoIosRepeat />
            </button>
          </div>
          <div className='player__seek'>
            <input
              type='range'
              id='seek'
              min={0}
              max='100'
              value={currentTime}
              style={{ backgroundSize: `${currentTime}%` }}
              onChange={seekTo}
            />
          </div>
        </div>
        <div className='player__volume'>
          <IoIosVolumeHigh />
          <input
            type='range'
            name='volume'
            id='volume'
            value={volume}
            max={100}
            min={0}
            onChange={handleVolumeChange}
            style={{ backgroundSize: `${volume}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
