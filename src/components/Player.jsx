import PlayerButtons from './PlayerButtons'
import PlayerNowplaying from './PlayerNowplaying'
import Volume from './Volume'

function Player() {
  return (
    <div className='player'>
      <div className='container'>
        <PlayerNowplaying />
        <PlayerButtons />
        <Volume />
      </div>
    </div>
  )
}

export default Player
