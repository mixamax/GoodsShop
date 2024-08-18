export interface IProductDTO {
  id: number //оставляем
  title: string //оставляем
  description: string //оставляем
  category: string
  price: number //оставляем
  discountPercentage: number //оставляем
  rating: number //оставляем
  stock: number //оставляем
  tags: string[] //оставляем
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string //оставляем
  shippingInformation: string //оставляем
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  thumbnail: string //оставляем
  images: string[] //оставляем
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  warrantyInformation: string
  shippingInformation: string
  thumbnail: string
  images: string[]
}

export interface IResponseProductsDTO {
  products: IProductDTO[]
  total: number
  skip: number
  limit: number
}
