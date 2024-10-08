import { useAppDispatch, useAppSelector } from './storeHooks'
import {
  ICart,
  ICartProduct,
  IRequestChangeProductQuantity,
} from '../models/cartModel'
import { IProduct } from '../models/productModel'
import { updateCart } from '../store/cartSlice'
import { useEffect, useState } from 'react'

export default function useButtonAction(
  cartId: ICart['id'] | undefined,
  productId: ICartProduct['id'],
  quantity: ICartProduct['quantity'],
  stock?: IProduct['stock']
) {
  const [isPlusDisabled, setIsPlusDisabled] = useState(false)
  useEffect(() => {
    if (stock && quantity >= stock) {
      setIsPlusDisabled(true)
    } else {
      setIsPlusDisabled(false)
    }
  }, [stock, quantity])

  const existCartProducts = useAppSelector((state) => state.cart.cart?.products)
  let requestProductsArray: IRequestChangeProductQuantity[] = []
  const isProductInCart = existCartProducts?.find(
    (product) => product.id === productId
  )
  if (existCartProducts) {
    requestProductsArray = existCartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }))
    if (!isProductInCart) {
      requestProductsArray.push({ id: productId, quantity: quantity })
    }
  }

  const dispatch = useAppDispatch()
  const incrementProduct = () => {
    if (!cartId) return
    dispatch(
      updateCart({
        cartId,
        data: requestProductsArray.map((product) => {
          if (product.id === productId) {
            return { id: productId, quantity: quantity + 1 }
          }
          return product
        }),
      })
    )
  }

  const decrementProduct = () => {
    if (quantity === 0) return
    if (!cartId) return
    dispatch(
      updateCart({
        cartId,
        data: requestProductsArray.map((product) => {
          if (product.id === productId) {
            return { id: productId, quantity: quantity - 1 }
          }
          return product
        }),
      })
    )
  }
  const deleteProduct = () => {
    if (!cartId) return
    dispatch(
      updateCart({
        cartId,
        data: requestProductsArray.map((product) => {
          if (product.id === productId) {
            return { id: productId, quantity: 0 }
          }
          return product
        }),
      })
    )
  }

  return { isPlusDisabled, incrementProduct, decrementProduct, deleteProduct }
}
