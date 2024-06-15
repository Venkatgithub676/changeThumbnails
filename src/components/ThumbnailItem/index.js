// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {each, onClickImgBtn, isActive} = props
  const {id} = each

  const res = isActive ? '' : 'img-blur'
  const onClickBtn = () => {
    onClickImgBtn(id)
  }

  return (
    <li className="thumbnail-li-container">
      <button type="button" className={`img-btn ${res}`} onClick={onClickBtn}>
        <img
          className="thumbnail-imgs"
          src={each.thumbnailUrl}
          alt={each.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
