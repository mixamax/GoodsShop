import { render, fireEvent, screen } from '@testing-library/react'
import { FAQItem } from './FAQItem'
import { describe, it, expect, beforeEach } from 'vitest'
import styles from './faqItem.module.css'

describe('Компонент FAQItem', () => {
  beforeEach(() => {
    render(<FAQItem question="question" content="content" />)
  })
  it('должен рендериться заголовок вопроса c классом "question-text" и текстом "question"', async () => {
    const question = await screen.findByRole('heading', { name: 'question' })
    expect(question).toHaveClass(styles['question-text'])
    expect(question).toHaveTextContent('question')
  })
  it('должно рендериться текст "content"', () => {
    expect(screen.getByText('content')).toBeInTheDocument()
  })
  it('должна рендериться кнопка крестик, при нажатии на который добавляется класс "is-open" к элементу с классом "faq-wrapper"', () => {
    const button = screen.getByRole('button', { name: 'крестик' })
    const element = document.querySelector(`.${styles['faq-wrapper']}`)
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(element).toHaveClass(`${styles['faq-wrapper']} ${styles['is-open']}`)
  })
})
