import styles from './productDescription.module.css'
import { IProduct } from '../../models/productModel'
import { getDiscountPrice } from '../../utils/getDiscountPrice'
import { useAppSelector } from '../../hooks/storeHooks'
import { ButtonGroup } from '../buttonGroup/ButtonGroup'

type Props = {
  product: IProduct
}

export function ProductDescription({ product }: Props) {
  const { cart } = useAppSelector((state) => state.cart)

  const quantity =
    cart?.products.find((item) => item.id === product.id)?.quantity || 0

  const stars = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    active: index < Math.round(product.rating),
  }))

  return (
    <div className={styles['description-block-container']}>
      <div className={styles['description-title']}>
        <h1 className={styles['title']}>{product.title}</h1>
        <div className={styles['metadata']}>
          <div className={styles['rating']}>
            {stars.map((star) => (
              <Star key={star.id} active={star.active} />
            ))}
          </div>
          <h6 className={styles['metadata-text']}>{product.tags.join(', ')}</h6>
        </div>
        <div
          className={styles['stock']}
        >{`In Stock - Only ${product.stock} left!`}</div>
        <p className={styles['description-text']}>{product.description}</p>
        <div className={styles['other']}>
          <span className={styles['other-text']}>
            {product.warrantyInformation}
          </span>
          <span className={styles['other-text']}>
            {product.shippingInformation}
          </span>
        </div>
        <div className={styles['buy']}>
          <div className={styles['price-and-discount']}>
            <div className={styles['price-container']}>
              <span className={styles['final-price']}>
                ${getDiscountPrice(product.price, product.discountPercentage)}
              </span>
              <span className={styles['old-price']}>${product.price}</span>
            </div>
            <div className={styles['discount']}>
              Your discount:&nbsp;<b>{product.discountPercentage}%</b>
            </div>
          </div>
          <ButtonGroup
            quantity={quantity}
            place="product"
            cartId={cart?.id}
            productId={product.id}
          />
        </div>
      </div>
    </div>
  )
}

type StarProps = {
  active: boolean
}
function Star({ active }: StarProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
        fill={active ? '#F14F4F' : '#D5D5D5'}
      />
    </svg>
  )
}
