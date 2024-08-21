import { CartContent } from '../components/cartContent/CartContent'
import { CartLayout } from '../components/cartLayout/CartLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function CartPage() {
  useDocumentTitle('My cart | Goods4you')

  return (
    <CartLayout>
      <CartContent />
    </CartLayout>
  )
}
