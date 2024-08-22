import { Login } from '../components/login/Login'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function LoginPage() {
  useDocumentTitle('Sign in | Goods4you')

  return <Login />
}
