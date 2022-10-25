function BackgroundImage({ image }) {
  return (
    <div className='background-image'>
      <img src={image} alt='' />
      <div className='background-cover'></div>
    </div>
  )
}

export default BackgroundImage
