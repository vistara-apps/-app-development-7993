import React from 'react'
import PartnerPortalComponent from '../components/partners/PartnerPortal'

const PartnerPortal = () => {
  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display mb-4">Partner Portal</h1>
          <p className="text-gray-600">
            Manage your referrals, track performance, and access marketing resources
          </p>
        </div>
        
        <PartnerPortalComponent variant="standard" />
      </div>
    </div>
  )
}

export default PartnerPortal