import { useParams } from 'react-router-dom'
import { ProductDescription } from '../components/productDescription/ProductDescription'
import { ProductFoto } from '../components/productFoto/ProductFoto'
import { ProductLayout } from '../components/productLayout/ProductLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useGetProductByIdQuery } from '../store/productApi'
import { ErrorContent } from '../components/errorContent/ErrorContent'

export function ProductPage() {
  const { id } = useParams()
  const { data, isLoading, error } = useGetProductByIdQuery(id || '')
  useDocumentTitle(`${data?.title} | Goods4you`)
  if (isLoading) return <h1>Loading...</h1>
  if (error || !data) return <ErrorContent text="Error 404. Page not found" />

  return (
    <ProductLayout>
      <ProductFoto images={data.images} />
      <ProductDescription product={data} />
    </ProductLayout>
  )
}
