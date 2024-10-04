import { useLocation, useNavigate } from 'react-router-dom'
import { About } from '../components/about/About'
import { Catalog } from '../components/catalog/Catalog'
import { FAQList } from '../components/faqList/FAQList'
import { useEffect } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  useDocumentTitle('Catalog | Goods4you')

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget
    if (scrollTarget) {
      const target = document.getElementById(scrollTarget)
      target?.scrollIntoView({ behavior: 'smooth' })
      navigate('.', { replace: true })
    }
  }, [])

  return (
    <>
      <About />
      <Catalog />
      <FAQList />
    </>
  )
}
