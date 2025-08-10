import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppShell = ({ variant = 'default' }) => {
  const shellClasses = variant === 'glass' 
    ? 'bg-white/10 backdrop-blur-md' 
    : 'bg-surface'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppShell