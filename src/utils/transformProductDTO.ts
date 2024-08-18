import { IProduct, IProductDTO } from '../models/productModel'

export function transformProductDTO(product: IProductDTO): IProduct {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    tags: product.tags,
    warrantyInformation: product.warrantyInformation,
    shippingInformation: product.shippingInformation,
    thumbnail: product.thumbnail,
    images: product.images,
  }
}
