import React, { useState } from 'react'
import { Smartphone, Wifi, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const SensorSetup = () => {
  const [setupStep, setSetupStep] = useState(1)
  const [sensors, setSensors] = useState([
    { id: 1, serial: '', location: '', status: 'pending' },
    { id: 2, serial: '', location: '', status: 'pending' },
    { id: 3, serial: '', location: '', status: 'pending' },
  ])

  const handleSerialChange = (id, serial) => {
    setSensors(sensors.map(sensor => 
      sensor.id === id ? { ...sensor, serial } : sensor
    ))
  }

  const handleLocationChange = (id, location) => {
    setSensors(sensors.map(sensor => 
      sensor.id === id ? { ...sensor, location } : sensor
    ))
  }

  const testSensor = (id) => {
    setSensors(sensors.map(sensor => 
      sensor.id === id ? { ...sensor, status: 'connected' } : sensor
    ))
  }

  const getStepStatus = (step) => {
    if (step < setupStep) return 'completed'
    if (step === setupStep) return 'current'
    return 'upcoming'
  }

  const steps = [
    { id: 1, title: 'Unbox Sensors', description: 'Check your sensor package contents' },
    { id: 2, title: 'Install Hardware', description: 'Place sensors in your lawn' },
    { id: 3, title: 'Connect to App', description: 'Pair sensors with your account' },
    { id: 4, title: 'Test & Calibrate', description: 'Verify readings and setup' },
  ]

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display mb-4">Sensor Setup Guide</h1>
          <p className="text-gray-600">
            Follow these steps to install and configure your smart soil monitors
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1">
                <div className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 
                    ${getStepStatus(step.id) === 'completed' 
                      ? 'bg-primary border-primary text-white' 
                      : getStepStatus(step.id) === 'current'
                      ? 'border-primary text-primary bg-primary/10'
                      : 'border-gray-300 text-gray-400'
                    }
                  `}>
                    {getStepStatus(step.id) === 'completed' ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      flex-1 h-0.5 mx-4
                      ${getStepStatus(step.id) === 'completed' ? 'bg-primary' : 'bg-gray-300'}
                    `} />
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="card">
          {setupStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 1: Unbox Your Sensors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Package Contents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>3x Smart Soil Sensors</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Installation stakes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Waterproof caps</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Quick start guide</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Important Notes</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Handle sensors carefully</li>
                    <li>• Keep batteries dry during setup</li>
                    <li>• Check for any damage before installation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <button 
                  onClick={() => setSetupStep(2)}
                  className="btn-primary"
                >
                  Continue to Installation
                </button>
              </div>
            </div>
          )}

          {setupStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 2: Install Hardware</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Installation Tips</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Strategic Placement</p>
                        <p className="text-sm text-gray-600">
                          Place sensors in different zones: sunny, shaded, and high-traffic areas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Wifi className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Network Coverage</p>
                        <p className="text-sm text-gray-600">
                          Ensure sensors are within WiFi range of your home
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Installation Steps</h3>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Choose optimal locations</li>
                    <li>Insert stakes 3-4 inches deep</li>
                    <li>Attach sensors to stakes</li>
                    <li>Ensure probes contact soil</li>
                    <li>Note serial numbers</li>
                  </ol>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => setSetupStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button 
                  onClick={() => setSetupStep(3)}
                  className="btn-primary"
                >
                  Continue to Pairing
                </button>
              </div>
            </div>
          )}

          {setupStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 3: Connect to App</h2>
              <div className="space-y-6">
                {sensors.map((sensor) => (
                  <div key={sensor.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Sensor {sensor.id}</h3>
                      <div className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${sensor.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {sensor.status === 'connected' ? 'Connected' : 'Pending'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Serial Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter sensor serial number"
                          value={sensor.serial}
                          onChange={(e) => handleSerialChange(sensor.id, e.target.value)}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location Description
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Front yard, near oak tree"
                          value={sensor.location}
                          onChange={(e) => handleLocationChange(sensor.id, e.target.value)}
                          className="input"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button
                        onClick={() => testSensor(sensor.id)}
                        disabled={!sensor.serial || sensor.status === 'connected'}
                        className="btn-secondary disabled:opacity-50"
                      >
                        Test Connection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => setSetupStep(2)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button 
                  onClick={() => setSetupStep(4)}
                  disabled={sensors.some(s => s.status !== 'connected')}
                  className="btn-primary disabled:opacity-50"
                >
                  Continue to Testing
                </button>
              </div>
            </div>
          )}

          {setupStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 4: Test & Calibrate</h2>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium text-green-800">Setup Complete!</h3>
                  </div>
                  <p className="text-green-700 text-sm">
                    All sensors are connected and receiving data. Your smart monitoring system is now active.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sensors.map((sensor) => (
                    <div key={sensor.id} className="bg-white border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Sensor {sensor.id}</h4>
                      <p className="text-sm text-gray-600 mb-3">{sensor.location}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Moisture:</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>pH:</span>
                          <span className="font-medium">6.8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Temperature:</span>
                          <span className="font-medium">72°F</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Next Steps</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Visit your dashboard to view real-time data</li>
                    <li>• Check the mobile app for AI recommendations</li>
                    <li>• Set up watering schedule notifications</li>
                    <li>• Review your lawn care plan</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="btn-primary"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SensorSetup