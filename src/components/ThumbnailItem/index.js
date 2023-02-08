// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    setActiveThumbnailId(id)
  }

  const activeBtn = isActive ? '' : 'active-btn'

  return (
    <li className="thumbnail-container">
      <button
        type="button"
        className={`btn ${activeBtn}`}
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
