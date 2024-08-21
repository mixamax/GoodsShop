import { FAQItem } from '../faqItem/FAQItem'
import styles from './faqList.module.css'

const FAQItems = [
  {
    question: 'How can I track the status of my order?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the `My Orders` section to track your delivery status.',
  },
  {
    question: 'What payment methods do you accept?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the `My Orders` section to track your delivery status.',
  },
  {
    question: 'How can I return or exchange an item?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the `My Orders` section to track your delivery status.',
  },
]

export function FAQList() {
  return (
    <section id="FAQ" className={styles.faqList}>
      <div className={styles.faqListContent}>
        <h2 className={styles.title}>FAQ</h2>
        {FAQItems.map((item) => (
          <FAQItem
            question={item.question}
            content={item.content}
            key={item.question}
          />
        ))}
      </div>
    </section>
  )
}
