import styles from './buttonGroup.module.css'
import { useAppSelector } from '../../hooks/storeHooks'
import { ICart, ICartProduct } from '../../models/cartModel'
import plural from '../../utils/plural'
import { MainButton } from '../mainButton/MainButton'
import useButtonAction from '../../hooks/useButtonAction'

type ButtonGroupProps = {
  place: 'cart' | 'catalog' | 'product'
  productId: ICartProduct['id']
  quantity: ICartProduct['quantity']
  cartId: ICart['id'] | undefined
}
export function ButtonGroup({
  quantity,
  cartId,
  productId,
  place,
}: ButtonGroupProps) {
  const isUpdateLoading = useAppSelector((state) => state.cart.isUpdateLoading)
  const { incrementProduct, decrementProduct, deleteProduct } = useButtonAction(
    cartId,
    productId,
    quantity
  )

  return (
    <>
      {quantity > 0 ? (
        <div className={styles[`${place}-btn-wrapper`]}>
          <MainButton
            disabled={isUpdateLoading === 'pending'}
            type={place === 'product' ? 'largeIcon' : 'smallIcon'}
            icon="minus"
            callBack={() => {
              decrementProduct()
            }}
          />
          <span className={styles[`${place}-quantity`]}>
            {quantity} {plural(quantity)}
          </span>
          <MainButton
            disabled={isUpdateLoading === 'pending'}
            type={place === 'product' ? 'largeIcon' : 'smallIcon'}
            icon="plus"
            callBack={() => {
              incrementProduct()
            }}
          />
          {place === 'cart' && (
            <button className={styles['delete-btn']} onClick={deleteProduct}>
              Delete
            </button>
          )}
        </div>
      ) : (
        <div
          className={`${styles[`${place}-btn-wrapper`]} ${place === 'cart' && styles['cart-flexEnd']}`}
        >
          <MainButton
            disabled={isUpdateLoading === 'pending'}
            type="smallIcon"
            icon="cart"
            callBack={() => {
              incrementProduct()
            }}
          />
        </div>
      )}
    </>
  )
}
