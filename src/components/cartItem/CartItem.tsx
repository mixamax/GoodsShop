import styles from './cartItem.module.css'
import itemFotoURL from '../../assets/images/productImg.jpg'
import { MainButton } from '../mainButton/MainButton'
import plural from '../../utils/plural'

const productName = 'Essence Mascara Lash Princess'
const productPrice = 110

type Props = {
  quantity: number
}

//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = itemFotoURL
}
export function CartItem({ quantity }: Props) {
  const isQuantity = quantity > 0
  return (
    <div
      className={`${styles['cart-item-container']} ${!isQuantity && styles['noHover']}`}
    >
      <div
        className={`${styles['fotoAndDescription-container']} ${!isQuantity && styles['disabled']}`}
      >
        <div className={styles['foto-container']}>
          <img
            className={styles['foto']}
            src={itemFotoURL}
            loading="lazy"
            alt="фото товара"
            onError={addDefaultImage}
          />
        </div>
        <div className={styles['description-container']}>
          <span className={styles['title']}>{productName}</span>
          <span className={styles['price']}>${productPrice}</span>
        </div>
      </div>
      <ButtonGroup quantity={quantity} />
    </div>
  )
}

function ButtonGroup({ quantity }: Props) {
  return (
    <>
      {quantity > 0 ? (
        <div className={styles['buttons-field']}>
          <MainButton type="smallIcon" icon="minus" callBack={() => {}} />
          <span>
            {quantity} {plural(quantity)}
          </span>
          <MainButton type="smallIcon" icon="plus" callBack={() => {}} />
          <button className={styles['delete-btn']}>Delete</button>
        </div>
      ) : (
        <div className={`${styles['buttons-field']} ${styles['flexEnd']}`}>
          <MainButton type="smallIcon" icon="cart" callBack={() => {}} />{' '}
        </div>
      )}
    </>
  )
}
