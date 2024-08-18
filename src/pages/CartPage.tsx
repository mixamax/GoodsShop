import { CartContent } from '../components/cartContent/CartContent'
import { CartLayout } from '../components/cartLayout/CartLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useAppSelector } from '../hooks/storeHooks'

export function CartPage() {
  useDocumentTitle('My cart | Goods4you')
  const { cart, loading } = useAppSelector((state) => state.cart)

  console.log(cart)
  return (
    <CartLayout>
      {loading === 'succeeded' && <CartContent cart={cart} />}
      {loading === 'failed' && <h1>Error</h1>}
      {loading === 'pending' && <h1>Loading...</h1>}
    </CartLayout>
  )
}
