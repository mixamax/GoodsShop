import { render, fireEvent, screen } from '@testing-library/react'
import { Login } from './Login'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('Компонент Login', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )
  })

  it('должен рендериться заголовок "Sign In"', () => {
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('должно рендериться поле с placeholder = "Username"', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
  })

  it('должно рендериться поле с placeholder = "Password"', () => {
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('должнен быть вызван submit при нажатии на кнопку "Sign In"', () => {
    const form = document.querySelector('form')
    expect(form).toBeDefined()
    const handleSubmit = vi.fn()
    if (form) {
      form.onsubmit = handleSubmit
    }
    const button = screen.getByRole('button', { name: 'Sign In' })
    fireEvent.click(button)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
