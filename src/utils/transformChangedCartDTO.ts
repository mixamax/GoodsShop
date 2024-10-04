import { ICartDTO, IResponseCartData } from '../models/cartModel'

export function transformChangedCartDTO(data: ICartDTO): IResponseCartData {
  if (!data) return { cart: null }
  return {
    cart: {
      id: data.id,
      products: data.products,
      priceWithoutDiscount: data.total,
      totalPrice: data.discountedTotal,
      userId: data.userId,
      totalProducts: data.totalProducts,
      totalItemsCount: data.totalQuantity,
    },
  }
}
