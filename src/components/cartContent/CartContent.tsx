import { CartItem } from '../cartItem/CartItem'
import styles from './cartContent.module.css'
import plural from '../../utils/plural'

const items = [2, 2, 2, 0]

export function CartContent() {
  return (
    <div className={styles['cart-content-container']}>
      <div className={styles['cart-items-container']}>
        {items.map((item, index) => (
          <CartItem key={index} quantity={item} />
        ))}
      </div>
      <div className={styles['cart-price-container']}>
        <div className={styles['cart-price-row']}>
          <span>Total count</span>
          <span className={styles['dark']}>3 {plural(3)}</span>
        </div>
        <div
          className={styles['cart-price-row']}
          style={{ marginBottom: '20px' }}
        >
          <span className={styles['semi-bold']}>Price without discount</span>
          <span className={styles['bold-and-dark']}>$700</span>
        </div>
        <div className={`${styles['cart-price-row']} ${styles['border']}`}>
          <span className={`${styles['semi-bold']} ${styles['large-size']}`}>
            Total price
          </span>
          <span
            className={`${styles['bold-and-dark']} ${styles['large-size']}`}
          >
            $590
          </span>
        </div>
      </div>
    </div>
  )
}
