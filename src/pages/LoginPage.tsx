import { useNavigate } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useGetCurrentUserQuery } from '../services/apiServices/authApi'
import { useEffect } from 'react'

export function LoginPage() {
  useDocumentTitle('Sign in | Goods4you')
  const navigate = useNavigate()
  const { data, isLoading, isFetching } = useGetCurrentUserQuery(
    localStorage.getItem('token') || ''
  )
  useEffect(() => {
    if (data) navigate('/')
  }, [])

  if (isLoading || isFetching) return <div>Loading...</div>
  return <Login />
}
