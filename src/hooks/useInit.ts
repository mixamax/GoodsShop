import { useEffect, useState } from 'react'
import { authApi } from '../services/apiServices/authApi'
import { useAppDispatch } from './storeHooks'
import { fetchCartById } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

export const useInit = () => {
  const [isSession, setIsSession] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInitError, setInitError] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [getUser, { data }] = authApi.useLazyGetCurrentUserQuery()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      getUser(token).then((value) => {
        if (value.data?.id) {
          dispatch(fetchCartById(value.data.id))
          setIsSession(true)
          setIsLoading(false)
        } else {
          setInitError(true)
          setIsSession(false)
          setIsLoading(false)
        }
      })
    } else {
      navigate('/login')
      setIsLoading(false)
      setIsSession(false)
    }
  }, [token])

  return {
    isSession,
    isLoading,
    isInitError,
    userFullName: data?.firstName + ' ' + data?.lastName,
  }
}
