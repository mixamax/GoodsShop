import { useState } from 'react'
import styles from './faqItem.module.css'
import iconURL from '../../assets/images/bigPlus.svg'

type Props = {
  question: string
  content: string
}

export function FAQItem({ question, content }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={styles.question}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className={styles['question-text']}>{question}</h3>
        <button className={styles['expand-btn']}>
          <img
            className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
            src={iconURL}
            alt="крестик"
            height={25}
            width={25}
          />
        </button>
      </div>
      <div
        className={`${styles['faq-wrapper']} ${isOpen ? styles['is-open'] : ''}`}
      >
        <div className={styles['faq-content']}>
          <p className={styles['content-text']}>{content}</p>
        </div>
      </div>
    </>
  )
}
