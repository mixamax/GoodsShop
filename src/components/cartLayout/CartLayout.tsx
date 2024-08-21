import styles from './cartLayout.module.css'

type Props = {
  children: React.ReactNode
}

export function CartLayout({ children }: Props) {
  return (
    <article className={styles['cart-container']}>
      <h1 className={styles['cart-title']}>My cart</h1>
      {children}
    </article>
  )
}
