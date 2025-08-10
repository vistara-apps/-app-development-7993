import React from 'react'
import { Building, Users, TrendingUp, DollarSign } from 'lucide-react'

const PartnerPortal = ({ variant = 'standard' }) => {
  const isEnterprise = variant === 'enterprise'

  const stats = [
    { label: 'Active Referrals', value: '24', icon: Users, change: '+12%' },
    { label: 'Total Revenue', value: '$8,450', icon: DollarSign, change: '+23%' },
    { label: 'Conversion Rate', value: '68%', icon: TrendingUp, change: '+5%' },
    { label: 'Customers Served', value: '156', icon: Building, change: '+18%' },
  ]

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Partner Dashboard</h2>
          {isEnterprise && (
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Enterprise
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Recent Referrals</h3>
          <div className="space-y-3">
            {[
              { name: 'Maple Heights HOA', status: 'Completed', amount: '$1,200' },
              { name: 'Sunrise Development', status: 'In Progress', amount: '$850' },
              { name: 'Garden District', status: 'Pending', amount: '$2,100' },
            ].map((referral, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{referral.name}</p>
                  <p className="text-sm text-gray-600">{referral.status}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{referral.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Marketing Assets</h3>
          <div className="space-y-3">
            {[
              { name: 'LawnRevive Brochure', type: 'PDF', size: '2.1 MB' },
              { name: 'Product Demo Video', type: 'MP4', size: '15.3 MB' },
              { name: 'Logo Package', type: 'ZIP', size: '850 KB' },
            ].map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{asset.name}</p>
                  <p className="text-sm text-gray-600">{asset.type} • {asset.size}</p>
                </div>
                <button className="btn-secondary text-sm">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerPortal