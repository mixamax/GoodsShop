import { CartItem } from './CartItem'
import { ICartProduct } from '../../models/cartModel'
import productUrl from '../../assets/images/productImg.jpg'

const product: ICartProduct = {
  id: 1,
  title: 'Product title',
  price: 100,
  quantity: 1,
  total: 100,
  discountPercentage: 10,
  discountedTotal: 90,
  thumbnail: productUrl,
}

export default {
  component: CartItem,
  title: 'Components/CartItem',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export const Default = {
  args: {
    product: product,
  },
}

export const NoQuantity = {
  args: { product: { ...product, quantity: 0 } },
}
