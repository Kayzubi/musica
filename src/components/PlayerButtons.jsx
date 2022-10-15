import {
  IoIosShuffle,
  IoIosSkipBackward,
  IoIosPlay,
  IoIosSkipForward,
  IoIosRepeat,
} from 'react-icons/io'
import PlayerSeek from './PlayerSeek'

function PlayerButtons() {
  const buttons = [
    {
      icon: <IoIosShuffle />,
      function: 'shuffle',
    },
    {
      icon: <IoIosSkipBackward />,
      function: 'previous',
    },
    {
      icon: <IoIosPlay />,
      function: 'play',
    },
    {
      icon: <IoIosSkipForward />,
      function: 'next',
    },
    {
      icon: <IoIosRepeat />,
      function: 'repeat',
    },
  ]
  return (
    <div className='player__controls'>
      <div className='player__buttons'>
        {buttons.map((btn) => {
          if (btn.function === 'play') {
            return (
              <button className='player-btn player-btn-play'>{btn.icon}</button>
            )
          } else {
            return <button className='player-btn'>{btn.icon}</button>
          }
        })}
      </div>
      <PlayerSeek />
    </div>
  )
}

export default PlayerButtons
