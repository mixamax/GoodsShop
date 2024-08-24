import { useNavigate } from 'react-router-dom'
import { useGetCurrentUserQuery } from '../../services/apiServices/authApi'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  redirectTo: string
}
export function Protected({ children, redirectTo }: Props) {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if (!token) {
    navigate(redirectTo)
    return
  }
  const { data, isLoading } = useGetCurrentUserQuery(token)
  useEffect(() => {
    if (data) {
      navigate(redirectTo)
    }
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return children
}
