import { useEffect, useState } from 'react'
import { authApi } from '../services/apiServices/authApi'
import { useAppDispatch } from './storeHooks'
import { fetchCartById } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

export const useInit = () => {
  const [isSession, setIsSession] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [getUser, { isLoading, data }] = authApi.useLazyGetCurrentUserQuery()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      getUser(token).then((value) => {
        if (value.data?.id) {
          dispatch(fetchCartById(value.data.id))
          setIsSession(true)
        } else {
          setIsSession(false)
          navigate('/login')
        }
      })
    } else {
      setIsSession(false)
      navigate('/login')
    }
  }, [token, getUser])

  return {
    isSession,
    isLoading,
    userFullName: data?.firstName + ' ' + data?.lastName,
  }
}
