import { ProductDescription } from '../components/productDescription/ProductDescription'
import { ProductFoto } from '../components/productFoto/ProductFoto'
import { ProductLayout } from '../components/productLayout/ProductLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ProductPage() {
  useDocumentTitle('Essence Mascara Lash Princess | Goods4you')

  return (
    <ProductLayout>
      <ProductFoto />
      <ProductDescription />
    </ProductLayout>
  )
}
