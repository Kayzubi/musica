import { IoIosVolumeHigh } from 'react-icons/io'

function Volume() {
  return (
    <div className='player__volume'>
      <IoIosVolumeHigh />
      <input type='range' name='volume' id='volume' />
    </div>
  )
}

export default Volume
