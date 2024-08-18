import { CartItem } from '../cartItem/CartItem'
import styles from './cartContent.module.css'
import plural from '../../utils/plural'
import { ICart } from '../../models/cartModel'

type Props = {
  cart: ICart | null
}

export function CartContent({ cart }: Props) {
  const products = cart?.products
  if (!products) return <h2 className={styles['no-items']}>No Items</h2>
  return (
    <div className={styles['cart-content-container']}>
      <div className={styles['cart-items-container']}>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles['cart-price-container']}>
        <div className={styles['cart-price-row']}>
          <span>Total count</span>
          <span className={styles['dark']}>
            {cart.totalItemsCount} {plural(cart.totalItemsCount)}
          </span>
        </div>
        <div
          className={styles['cart-price-row']}
          style={{ marginBottom: '20px' }}
        >
          <span className={styles['semi-bold']}>Price without discount</span>
          <span className={styles['bold-and-dark']}>
            ${cart.priceWithoutDiscount}
          </span>
        </div>
        <div className={`${styles['cart-price-row']} ${styles['border']}`}>
          <span className={`${styles['semi-bold']} ${styles['large-size']}`}>
            Total price
          </span>
          <span
            className={`${styles['bold-and-dark']} ${styles['large-size']}`}
          >
            ${cart.totalPrice}
          </span>
        </div>
      </div>
    </div>
  )
}
