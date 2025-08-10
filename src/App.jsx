import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import KitOrdering from './pages/KitOrdering'
import SensorSetup from './pages/SensorSetup'
import PartnerPortal from './pages/PartnerPortal'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<AppShell />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="order" element={<KitOrdering />} />
            <Route path="setup" element={
              <ProtectedRoute>
                <SensorSetup />
              </ProtectedRoute>
            } />
            <Route path="partners" element={
              <ProtectedRoute>
                <PartnerPortal />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App