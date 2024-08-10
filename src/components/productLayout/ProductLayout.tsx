import styles from './productLayout.module.css'

type Props = {
  children: React.ReactNode
}

export function ProductLayout({ children }: Props) {
  return <article className={styles['product-container']}>{children}</article>
}
