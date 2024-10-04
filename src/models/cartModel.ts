export interface ICartProduct {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedTotal: number
  thumbnail: string
}

export interface ICartDTO {
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface ICart {
  id: number
  products: ICartProduct[]
  priceWithoutDiscount: number
  totalPrice: number
  userId: number
  totalProducts: number
  totalItemsCount: number
}

export interface IResponseCartDTO {
  carts: ICartDTO[]
  total: number
  skip: number
  limit: number
}

export interface IResponseCartData {
  cart: ICart | null
}

export interface IRequestChangeProductQuantity {
  id: number
  quantity: number
}
