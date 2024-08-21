import { LogoContainer } from '../logoContainer/LogoContainer'
import { Outlet } from 'react-router-dom'
import styles from './pageLayout.module.css'

export function PageLayout() {
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
