import { IResponseCartDTO, IResponseCartData } from '../models/cartModel'

export function transformCartDTO(data: IResponseCartDTO): IResponseCartData {
  if (!data.carts[0]) return { cart: null }
  return {
    cart: {
      id: data.carts[0].id,
      products: data.carts[0].products,
      priceWithoutDiscount: data.carts[0].total,
      totalPrice: data.carts[0].discountedTotal,
      userId: data.carts[0].userId,
      totalProducts: data.carts[0].totalProducts,
      totalItemsCount: data.carts[0].totalQuantity,
    },
  }
}

// {discountedTotal
// :
// 13576
// id
// :
// 15
// products
// :
// (5) [{…}, {…}, {…}, {…}, {…}]
// total
// :
// 13641.3
// totalProducts
// :
// 5
// totalQuantity
// :
// 20
// userId
// :
// 11}
