import styles from './catalogItem.module.css'
import imgURL from '../../assets/images/item.jpg'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../models/productModel'
import { useAppSelector } from '../../hooks/storeHooks'
import { getDiscountPrice } from '../../utils/getDiscountPrice'
import { ButtonGroup } from '../buttonGroup/ButtonGroup'

type Props = {
  product: IProduct
}
//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = imgURL
}
export function CatalogItem({ product }: Props) {
  const { cart } = useAppSelector((state) => state.cart)
  const navigate = useNavigate()
  const quantity =
    cart?.products.find((item) => item.id === product.id)?.quantity || 0
  const onNavigateToProduct = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <div className={styles['catalogItem-container']}>
      <figure
        className={styles['catalogItem-figure']}
        onClick={onNavigateToProduct}
      >
        <img
          className={styles['catalogItem-img']}
          src={product.thumbnail}
          alt={`${product.title} image`}
          loading="lazy"
          onError={addDefaultImage}
        />
        <figcaption className={styles['catalogItem-figcaption']}>
          Show details
        </figcaption>
      </figure>
      <div
        className={styles['catalogItem-text-wrapper']}
        onClick={onNavigateToProduct}
      >
        <h3 className={styles['catalogItem-title']}>{product.title}</h3>
        <span className={styles['catalogItem-price']}>
          ${getDiscountPrice(product.price, product.discountPercentage)}
        </span>
      </div>
      <div className={styles['catalogItem-btn-mask']}>Show details</div>
      <div className={styles['catalogItem-buttonGroup-wrapper']}>
        <ButtonGroup
          place="catalog"
          quantity={quantity}
          productId={product.id}
          cartId={cart?.id}
          stock={product.stock}
        />
      </div>
    </div>
  )
}
