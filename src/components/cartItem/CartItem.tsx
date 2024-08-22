import styles from './cartItem.module.css'
import itemFotoURL from '../../assets/images/productImg.jpg'
import { ICart, ICartProduct } from '../../models/cartModel'
import { getDiscountPrice } from '../../utils/getDiscountPrice'
import { useNavigate } from 'react-router-dom'
import { ButtonGroup } from '../buttonGroup/ButtonGroup'
type Props = {
  product: ICartProduct
  cartId: ICart['id']
}

//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = itemFotoURL
}
export function CartItem({ product, cartId }: Props) {
  const navigate = useNavigate()
  const isQuantity = product.quantity > 0
  return (
    <div
      className={`${styles['cart-item-container']} ${!isQuantity && styles['noHover']}`}
    >
      <div
        className={`${styles['fotoAndDescription-container']} ${!isQuantity && styles['disabled']}`}
      >
        <div className={styles['foto-container']}>
          <img
            className={styles['foto']}
            src={product.thumbnail}
            loading="lazy"
            alt="фото товара"
            onError={addDefaultImage}
          />
        </div>
        <div className={styles['description-container']}>
          <span
            onClick={() => navigate(`/product/${product.id}`)}
            className={styles['title']}
          >
            {product.title}
          </span>
          <span className={styles['price']}>
            ${getDiscountPrice(product.price, product.discountPercentage)}
          </span>
        </div>
      </div>
      <ButtonGroup
        place="cart"
        quantity={product.quantity}
        productId={product.id}
        cartId={cartId}
      />
    </div>
  )
}

// type ButtonGroupProps = {
//   productId: ICartProduct['id']
//   quantity: ICartProduct['quantity']
//   cartId: ICart['id']
// }
// export function ButtonGroup({ quantity, cartId, productId }: ButtonGroupProps) {
//   const isUpdateLoading = useAppSelector((state) => state.cart.isUpdateLoading)
//   const dispatch = useAppDispatch()
//   const incrementProduct = () => {
//     dispatch(
//       updateCart({ cartId, data: { id: productId, quantity: quantity + 1 } })
//     )
//   }

//   const decrementProduct = () => {
//     if (quantity === 0) return
//     dispatch(
//       updateCart({ cartId, data: { id: productId, quantity: quantity - 1 } })
//     )
//   }
//   const deleteProduct = () => {
//     dispatch(updateCart({ cartId, data: { id: productId, quantity: 0 } }))
//   }

//   return (
//     <>
//       {quantity > 0 ? (
//         <div className={styles['buttons-field']}>
//           <MainButton
//             disabled={isUpdateLoading === 'pending'}
//             type="smallIcon"
//             icon="minus"
//             callBack={() => {
//               decrementProduct()
//             }}
//           />
//           <span>
//             {quantity} {plural(quantity)}
//           </span>
//           <MainButton
//             disabled={isUpdateLoading === 'pending'}
//             type="smallIcon"
//             icon="plus"
//             callBack={() => {
//               incrementProduct()
//             }}
//           />
//           <button className={styles['delete-btn']} onClick={deleteProduct}>
//             Delete
//           </button>
//         </div>
//       ) : (
//         <div className={`${styles['buttons-field']} ${styles['flexEnd']}`}>
//           <MainButton
//             disabled={isUpdateLoading === 'pending'}
//             type="smallIcon"
//             icon="cart"
//             callBack={() => {
//               incrementProduct()
//             }}
//           />
//         </div>
//       )}
//     </>
//   )
// }
