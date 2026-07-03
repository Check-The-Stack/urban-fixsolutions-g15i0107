import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ClienteDashboard from './pages/cliente/Dashboard'
import TecnicoDashboard from './pages/tecnico/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cliente/*" element={
          <ProtectedRoute role="CLIENTE">
            <ClienteDashboard />
          </ProtectedRoute>
        } />

        <Route path="/tecnico/*" element={
          <ProtectedRoute role="TECNICO">
            <TecnicoDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin/*" element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
