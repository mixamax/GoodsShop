import { LogoContainer } from '../logoContainer/LogoContainer'
import { Outlet } from 'react-router-dom'
import styles from './pageLayout.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { fetchCartById } from '../../store/cartSlice'
import { useEffect } from 'react'

export function PageLayout() {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCartById(user.id))
  }, [user.id])

  return (
    <>
      <header className={`${styles.container} ${styles.header}`}>
        <LogoContainer position="header" />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={`${styles.container} ${styles.footer}`}>
        <LogoContainer position="footer" />
      </footer>
    </>
  )
}
