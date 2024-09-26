import './index.css'

const ThumbnailItem = props => {
  const {thumbNail, clickThumb} = props
  const {imageUrl, thumbnailAltText} = thumbNail

  const clickThumbId = () => {
    clickThumb(imageUrl, thumbnailAltText)
  }

  return (
    <li>
      <div>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumb-img"
          onClick={clickThumbId}
        />
      </div>
    </li>
  )
}

export default ThumbnailItem
