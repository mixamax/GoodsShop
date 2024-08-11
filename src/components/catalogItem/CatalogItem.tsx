import styles from './catalogItem.module.css'
import imgURL from '../../assets/images/item.jpg'
import { MainButton } from '../mainButton/MainButton'
import { MouseEvent, useState } from 'react'
import plural from '../../utils/plural'
import { useNavigate } from 'react-router-dom'

const productID = 1
type Props = {
  quantity: number
}
//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = imgURL
}
export function CatalogItem({ quantity }: Props) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const onMouseOver = (e: MouseEvent) => {
    if (isButton(e)) {
      setHovered(false)
      return
    }
    setHovered(true)
  }
  const onNavigateToProduct = (e: MouseEvent) => {
    if (isButton(e)) {
      return
    }
    navigate(`/product/${productID}`)
  }
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={() => setHovered(false)}
      onClick={onNavigateToProduct}
      className={styles['catalogItem-container']}
    >
      <div
        className={`${styles['img-wrapper']} ${hovered && styles['img-wrapper_hovered']}`}
      >
        <figure className={styles['catalogItem-figure']}>
          <img
            className={styles['catalogItem-img']}
            src={imgURL}
            alt="фото товара"
            loading="lazy"
            onError={addDefaultImage}
          />
          <figcaption
            className={`${styles['catalogItem-figcaption']} ${hovered && styles['catalogItem-figcaption_hovered']}`}
          >
            Show details
          </figcaption>
        </figure>
      </div>
      <div className={styles['catalogItem-footer']}>
        <div className={styles['catalogItem-text-wrapper']}>
          <h3
            className={`${styles['catalogItem-title']} ${hovered && styles['catalogItem-title_hovered']}`}
          >
            Essence Mascara Lash Princess
          </h3>
          <span className={styles['catalogItem-price']}>$110</span>
        </div>
        <ButtonGroup quantity={quantity} />
      </div>
    </div>
  )
}

function isButton(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (
    target.getAttribute('alt') === 'корзина' ||
    target.getAttribute('alt') === 'минус' ||
    target.getAttribute('alt') === 'плюс' ||
    target.tagName === 'BUTTON' ||
    target.classList.contains(styles['catalogItem-btn-wrapper']) ||
    target.classList.contains(styles['catalogItem-quantity'])
  ) {
    return true
  }
  return false
}

function ButtonGroup({ quantity }: Props) {
  return (
    <>
      {quantity > 0 ? (
        <div className={styles['catalogItem-btn-wrapper']}>
          <MainButton
            type="smallIcon"
            icon="minus"
            callBack={() => console.log('click minus')}
          />
          <span className={styles['catalogItem-quantity']}>2 {plural(2)}</span>
          <MainButton
            type="smallIcon"
            icon="plus"
            callBack={() => console.log('click plus')}
          />
        </div>
      ) : (
        <div className={styles['catalogItem-btn-wrapper']}>
          <MainButton
            type="smallIcon"
            icon="cart"
            callBack={() => console.log('click Add to cart')}
          />
        </div>
      )}
    </>
  )
}
