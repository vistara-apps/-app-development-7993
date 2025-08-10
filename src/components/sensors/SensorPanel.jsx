import React from 'react'
import { Droplets, Activity, Zap } from 'lucide-react'

const SensorPanel = ({ 
  variant = 'detailed', 
  moisture = 65, 
  pH = 6.8, 
  nutrients = 'Medium',
  lastReading = new Date()
}) => {
  const isCompact = variant === 'compact'

  const getStatusColor = (value, type) => {
    if (type === 'moisture') {
      if (value < 30) return 'text-red-500'
      if (value > 70) return 'text-blue-500'
      return 'text-green-500'
    }
    if (type === 'pH') {
      if (value < 6.0 || value > 7.5) return 'text-yellow-500'
      return 'text-green-500'
    }
    return 'text-green-500'
  }

  if (isCompact) {
    return (
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Droplets className={`h-4 w-4 ${getStatusColor(moisture, 'moisture')}`} />
              <span className="text-sm">{moisture}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className={`h-4 w-4 ${getStatusColor(pH, 'pH')}`} />
              <span className="text-sm">{pH}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {lastReading.toLocaleTimeString()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Soil Monitor</h3>
        <div className="text-xs text-gray-500">
          Last updated: {lastReading.toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-200">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <Droplets className={`h-7 w-7 ${getStatusColor(moisture, 'moisture')}`} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-600 mb-1">Moisture</div>
            <div className="text-2xl font-bold text-gray-900">{moisture}%</div>
            <div className={`text-sm font-medium ${getStatusColor(moisture, 'moisture')}`}>
              {moisture < 30 ? 'Too Dry' : moisture > 70 ? 'Too Wet' : 'Optimal'}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-100 hover:shadow-md transition-all duration-200">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <Activity className={`h-7 w-7 ${getStatusColor(pH, 'pH')}`} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-600 mb-1">pH Level</div>
            <div className="text-2xl font-bold text-gray-900">{pH}</div>
            <div className={`text-sm font-medium ${getStatusColor(pH, 'pH')}`}>
              {pH < 6.0 || pH > 7.5 ? 'Adjust Needed' : 'Good Range'}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl border border-accent/20 hover:shadow-md transition-all duration-200">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <Zap className="h-7 w-7 text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-600 mb-1">Nutrients</div>
            <div className="text-2xl font-bold text-gray-900">{nutrients}</div>
            <div className="text-sm font-medium text-accent">
              NPK Balance
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">AI Recommendation</h4>
            <p className="text-gray-700 leading-relaxed">
              Your lawn is in good condition. Continue current watering schedule. 
              Consider light fertilization in 2 weeks based on nutrient levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SensorPanel
