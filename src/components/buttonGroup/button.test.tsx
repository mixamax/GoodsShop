import { render, screen } from '@testing-library/react'
import { ButtonGroup } from './ButtonGroup'
import { describe, it, expect } from 'vitest'
import buttonStyles from '../mainButton/mainButton.module.css'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('Компонент ButtonGroup', () => {
  it('должны рендериться две кнопки + и - и текст = 1 item', () => {
    render(
      <Provider store={store}>
        <ButtonGroup quantity={1} cartId={1} productId={1} place="catalog" />
      </Provider>
    )

    const plus = screen.getByRole('button', { name: 'плюс' })
    const minus = screen.getByRole('button', { name: 'минус' })
    const quantity = screen.getByText('1 item')
    expect(plus).toBeInTheDocument()
    expect(minus).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
  })

  it('при количестве = 2 должен рендерится  текст = 2 items', () => {
    render(
      <Provider store={store}>
        <ButtonGroup quantity={2} cartId={1} productId={1} place="catalog" />
      </Provider>
    )

    const quantity = screen.getByText('2 items')
    expect(quantity).toBeInTheDocument()
  })

  it('при количестве = 0 должна рендерится кнопка с корзиной', () => {
    render(
      <Provider store={store}>
        <ButtonGroup quantity={0} cartId={1} productId={1} place="catalog" />
      </Provider>
    )

    const cart = screen.getByRole('button', { name: 'корзина' })
    expect(cart).toBeInTheDocument()
  })

  it('при количестве = stock кнопка плюс должна быть disabled', () => {
    render(
      <Provider store={store}>
        <ButtonGroup
          quantity={1}
          stock={1}
          cartId={1}
          productId={1}
          place="catalog"
        />
      </Provider>
    )

    const plus = screen.getByRole('button', { name: 'плюс' })
    expect(plus).toHaveClass(
      `${buttonStyles['button']} ${buttonStyles['smallIcon']} ${buttonStyles['disabled']}`
    )
  })
})
