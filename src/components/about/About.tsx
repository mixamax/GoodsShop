import { MainButton } from '../mainButton/MainButton'
import styles from './about.module.css'

const backgroundText = 'Goods4you'
const contentTitle = 'Any products from famous brands with worldwide delivery'
const contentText =
  'We sell smartphones, laptops, clothes, shoes and many other products at low prices'

export function About() {
  const scrollToElement = (targetId: string) => {
    const target = document.getElementById(targetId)
    target?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className={styles.about}>
      <div className={styles.aboutBorder}>
        <span className={styles.backgroundText}>{backgroundText}</span>
        <div className={styles.aboutContent}>
          <h1 className={styles.contentTitle}>{contentTitle}</h1>
          <p className={styles.contentText}>{contentText}</p>
          <MainButton
            type="text"
            text="Go to shopping"
            callBack={() => scrollToElement('catalog')}
          />
        </div>
      </div>
    </section>
  )
}
