import styles from './errorContent.module.css'

type Props = {
  text: string
}
export function ErrorContent({ text }: Props) {
  return (
    <div className={styles['error-content']}>
      <h1>{text}</h1>
    </div>
  )
}
