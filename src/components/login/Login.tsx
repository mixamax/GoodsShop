import { FormEvent, useState } from 'react'
import styles from './login.module.css'
import { authApi } from '../../services/apiServices/authApi'
import { useNavigate } from 'react-router-dom'

const userInitValue = {
  username: 'liamg',
  password: 'liamgpass',
}
export function Login() {
  const [user, setUser] = useState(userInitValue)
  const navigate = useNavigate()
  const [getToken, { isLoading }] = authApi.useLazyGetTokenQuery()

  const onChangeUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const name = target.name
    const value = target.value
    setUser({ ...user, [name]: value })
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (user.username === '') {
      return
    }
    if (user.password === '') {
      return
    }
    getToken(user).then((value) => {
      if (value.data) {
        localStorage.setItem('token', value.data.accessToken)
        setUser(userInitValue)
        navigate('/')
      }
    })
  }
  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>Sign In</h1>
      <form className={styles['login-form']} onSubmit={onSubmit}>
        <input
          name="username"
          className={styles['login-input']}
          type="text"
          placeholder="Username"
          onChange={onChangeUserValue}
          defaultValue={userInitValue.username}
        />
        <input
          name="password"
          className={styles['login-input']}
          type="password"
          placeholder="Password"
          onChange={onChangeUserValue}
          defaultValue={userInitValue.password}
        />
        <button
          name="submit"
          type="submit"
          className={styles['login-btn']}
          disabled={isLoading}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
