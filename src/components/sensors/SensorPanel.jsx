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
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Droplets className={`h-6 w-6 ${getStatusColor(moisture, 'moisture')}`} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Moisture</div>
            <div className="text-xl font-semibold">{moisture}%</div>
            <div className="text-xs text-gray-500">
              {moisture < 30 ? 'Too Dry' : moisture > 70 ? 'Too Wet' : 'Optimal'}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <Activity className={`h-6 w-6 ${getStatusColor(pH, 'pH')}`} />
          </div>
          <div>
            <div className="text-sm text-gray-600">pH Level</div>
            <div className="text-xl font-semibold">{pH}</div>
            <div className="text-xs text-gray-500">
              {pH < 6.0 || pH > 7.5 ? 'Adjust Needed' : 'Good Range'}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-3 bg-yellow-50 rounded-lg">
            <Zap className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Nutrients</div>
            <div className="text-xl font-semibold">{nutrients}</div>
            <div className="text-xs text-gray-500">
              NPK Balance
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h4 className="font-medium mb-2">AI Recommendation</h4>
        <p className="text-sm text-gray-700">
          Your lawn is in good condition. Continue current watering schedule. 
          Consider light fertilization in 2 weeks based on nutrient levels.
        </p>
      </div>
    </div>
  )
}

export default SensorPanel