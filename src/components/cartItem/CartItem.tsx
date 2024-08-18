import styles from './cartItem.module.css'
import itemFotoURL from '../../assets/images/productImg.jpg'
import { MainButton } from '../mainButton/MainButton'
import plural from '../../utils/plural'
import { ICartProduct } from '../../models/cartModel'
import { getDiscountPrice } from '../../utils/getDiscountPrice'
import { useNavigate } from 'react-router-dom'

type Props = {
  product: ICartProduct
}

//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = itemFotoURL
}
export function CartItem({ product }: Props) {
  const navigate = useNavigate()
  const isQuantity = product.quantity > 0
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
            src={product.thumbnail}
            loading="lazy"
            alt="фото товара"
            onError={addDefaultImage}
          />
        </div>
        <div className={styles['description-container']}>
          <span
            onClick={() => navigate(`/product/${product.id}`)}
            className={styles['title']}
          >
            {product.title}
          </span>
          <span className={styles['price']}>
            ${getDiscountPrice(product.price, product.discountPercentage)}
          </span>
        </div>
      </div>
      <ButtonGroup quantity={product.quantity} />
    </div>
  )
}

function ButtonGroup({ quantity }: { quantity: ICartProduct['quantity'] }) {
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
