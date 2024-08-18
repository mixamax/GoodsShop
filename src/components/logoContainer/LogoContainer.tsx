import styles from './logoContainer.module.css'
import cartIconURL from '../../assets/images/cartIcon.svg'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/storeHooks'

const logo = 'Goods4you'

type Props = {
  position: 'header' | 'footer'
}

type Navigation = {
  scrollToElement: (targetId: string, targetPath: string) => void
  navigate: NavigateFunction
}
export function LogoContainer({ position }: Props) {
  const navigate = useNavigate()
  const scrollToElement = (targetId: string, targetPath: string) => {
    if (window.location.pathname === targetPath) {
      const target = document.getElementById(targetId)
      target?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(targetPath, { state: { scrollTarget: targetId } })
    }
  }
  return (
    <div className={styles.content}>
      <div className={styles['logo-container']}>
        <Link className={styles.link} to="/">
          <span className={styles.logo}>{logo}</span>
        </Link>
      </div>
      {position === 'header' ? (
        <HeaderNavigation
          scrollToElement={scrollToElement}
          navigate={navigate}
        />
      ) : (
        <FooterNavigation scrollToElement={scrollToElement} />
      )}
    </div>
  )
}

function HeaderNavigation({ scrollToElement, navigate }: Navigation) {
  const cart = useAppSelector((state) => state.cart.cart)
  const totalItemsCount = cart?.totalItemsCount

  return (
    <nav className={styles.nav} aria-labelledby="primary-navigation">
      <ul className={styles['custom-ul']}>
        <li onClick={() => scrollToElement('catalog', '/')}>Catalog</li>
        <li onClick={() => scrollToElement('FAQ', '/')}>FAQ</li>
        <li onClick={() => navigate('/cart')} style={{ position: 'relative' }}>
          Cart
          <img
            className={styles['cart-icon']}
            src={cartIconURL}
            alt="корзина"
          />
          {totalItemsCount && (
            <div className={styles['cart-header-quantity']}>
              {totalItemsCount}
            </div>
          )}
        </li>
        <li>Johnson Smith</li>
      </ul>
    </nav>
  )
}

function FooterNavigation({
  scrollToElement,
}: Pick<Navigation, 'scrollToElement'>) {
  return (
    <div>
      <nav className={styles.nav} aria-labelledby="footer-navigation">
        <ul className={styles['custom-ul']}>
          <li onClick={() => scrollToElement('catalog', '/')}>Catalog</li>
          <li onClick={() => scrollToElement('FAQ', '/')}>FAQ</li>
        </ul>
      </nav>
    </div>
  )
}
