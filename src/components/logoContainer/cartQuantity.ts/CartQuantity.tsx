import styles from '../logoContainer.module.css'
export function CartQuantity({ totalItemsCount }: { totalItemsCount: number }) {
  return <div className={styles['cart-header-quantity']}>{totalItemsCount}</div>
}
