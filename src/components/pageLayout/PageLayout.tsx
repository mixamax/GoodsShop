import { LogoContainer } from '../logoContainer/LogoContainer'
import { Outlet } from 'react-router-dom'
import styles from './pageLayout.module.css'
import { useInit } from '../../hooks/useInit'
import { LoginPage } from '../../pages/LoginPage'

export interface IOutletContext {
  isSession: boolean
  isLoading: boolean
}

export function PageLayout() {
  const { isSession, isLoading, userFullName } = useInit()

  return (
    <>
      <header className={`${styles.container} ${styles.header}`}>
        <LogoContainer
          position={isSession ? 'header' : 'logIn'}
          userFullName={userFullName}
        />
      </header>
      <main className={styles.main}>
        {isLoading && <div>Loading...</div>}
        {!isLoading && !isSession && <LoginPage />}
        {!isLoading && isSession && <Outlet />}
      </main>
      {isSession && (
        <footer className={`${styles.container} ${styles.footer}`}>
          <LogoContainer position="footer" />
        </footer>
      )}
    </>
  )
}
