import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, role }) {
  // TODO: implementar auth context
  const user = null
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
