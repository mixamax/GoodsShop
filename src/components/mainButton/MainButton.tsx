import { createContext, useContext } from 'react'
import styles from './mainButton.module.css'
import bigPlusUrl from '../../assets/images/bigPlus.svg'
import bigMinusUrl from '../../assets/images/bigMinus.svg'
import cartIconUrl from '../../assets/images/cartIcon.svg'
import smallPlusUrl from '../../assets/images/smallPlus.svg'
import smallMinusUrl from '../../assets/images/smallMinus.svg'

const ButtonContext = createContext<ButtonParams | null>(null)
type ButtonParams = {
  type: 'text' | 'smallIcon' | 'largeIcon'
  text?: string
  icon?: 'plus' | 'minus' | 'cart'
  disabled?: boolean
}
type MainButtonProps = ButtonParams & {
  callBack: () => void
}
type CompoundButtonProps = {
  children: React.ReactNode
  buttonProps: MainButtonProps
}

export function MainButton(props: MainButtonProps) {
  return (
    <CompoundButton buttonProps={props}>
      <CompoundButton.Text />
      <CompoundButton.Plus />
      <CompoundButton.Minus />
      <CompoundButton.Cart />
    </CompoundButton>
  )
}

function CompoundButton({ children, buttonProps }: CompoundButtonProps) {
  const value = {
    type: buttonProps.type,
    icon: buttonProps.icon,
    text: buttonProps.text,
    disabled: buttonProps.disabled,
  }
  return (
    <ButtonContext.Provider value={value}>
      <button
        className={`${styles.button} ${styles[value.type]} ${
          buttonProps.disabled ? styles.disabled : ''
        }`}
        onClick={buttonProps.callBack}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  )
}
CompoundButton.Text = function Text() {
  const params = useContext(ButtonContext)

  if (params!.type !== 'text') return null
  return <span>{params!.text}</span>
}

CompoundButton.Plus = function Plus() {
  const params = useContext(ButtonContext)
  if (params!.icon !== 'plus') return null
  if (params!.type === 'smallIcon') {
    return <img src={smallPlusUrl} alt="плюс" />
  }
  if (params!.type === 'largeIcon') {
    return <img src={bigPlusUrl} alt="плюс" />
  }
}
CompoundButton.Minus = function Minus() {
  const params = useContext(ButtonContext)
  if (params!.icon !== 'minus') return null
  if (params!.type === 'smallIcon') {
    return <img src={smallMinusUrl} alt="минус" />
  }
  if (params!.type === 'largeIcon') {
    return <img src={bigMinusUrl} alt="минус" />
  }
}

CompoundButton.Cart = function Cart() {
  const params = useContext(ButtonContext)
  if (params!.icon !== 'cart') return null
  return <img src={cartIconUrl} alt="корзина" />
}
