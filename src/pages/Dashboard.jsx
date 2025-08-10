import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import SensorPanel from '../components/sensors/SensorPanel'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Calendar, TrendingUp, Droplets, AlertCircle } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()
  const [readings, setReadings] = useState([])
  const [aiRecommendation, setAiRecommendation] = useState('')

  // Mock data for demonstration
  useEffect(() => {
    const mockReadings = [
      { time: '6 AM', moisture: 45, pH: 6.5, temperature: 68 },
      { time: '9 AM', moisture: 52, pH: 6.6, temperature: 72 },
      { time: '12 PM', moisture: 48, pH: 6.7, temperature: 78 },
      { time: '3 PM', moisture: 42, pH: 6.8, temperature: 82 },
      { time: '6 PM', moisture: 58, pH: 6.9, temperature: 76 },
      { time: '9 PM', moisture: 62, pH: 6.8, temperature: 71 },
    ]
    setReadings(mockReadings)
    
    // Simulate AI recommendation
    setAiRecommendation(
      "Based on your soil readings, your lawn is showing good progress. Continue with the current watering schedule. The pH levels are optimal for grass growth. Consider a light fertilization in 10-14 days to support continued establishment."
    )
  }, [])

  const upcomingTasks = [
    { task: 'Water lawn zones 1-3', due: 'Today, 6:00 AM', priority: 'high' },
    { task: 'Check seed germination', due: 'Tomorrow', priority: 'medium' },
    { task: 'Apply starter fertilizer', due: 'In 3 days', priority: 'medium' },
    { task: 'Soil pH test', due: 'Next week', priority: 'low' },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="container section-padding-sm">
      <div className="mb-12">
        <h1 className="mb-3">
          Welcome back, {user?.user_metadata?.name || user?.email}
        </h1>
        <p className="text-gray-600">
          Here's how your lawn is progressing today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Droplets className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Moisture</p>
              <p className="text-xl font-semibold">52%</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-xl font-semibold">+12%</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Days Active</p>
              <p className="text-xl font-semibold">23</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-50 rounded-lg">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Alerts</p>
              <p className="text-xl font-semibold">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Sensor Data */}
          <SensorPanel variant="detailed" />

          {/* Trends Chart */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Soil Moisture Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={readings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="moisture" 
                  stroke="hsl(160, 70%, 40%)" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(160, 70%, 40%)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* AI Recommendations */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">AI Lawn Care Assistant</h3>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-gray-700">{aiRecommendation}</p>
            </div>
            <button className="mt-4 btn-secondary">
              Ask AI a Question
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
            <div className="space-y-3">
              {upcomingTasks.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <input 
                    type="checkbox" 
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.task}</p>
                    <p className="text-xs text-gray-600">{item.due}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Widget */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Weather Forecast</h3>
            <div className="space-y-3">
              {[
                { day: 'Today', condition: 'Sunny', temp: '78°F', precipitation: '0%' },
                { day: 'Tomorrow', condition: 'Partly Cloudy', temp: '72°F', precipitation: '20%' },
                { day: 'Wednesday', condition: 'Rain', temp: '65°F', precipitation: '80%' },
              ].map((weather, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{weather.day}</p>
                    <p className="text-xs text-gray-600">{weather.condition}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{weather.temp}</p>
                    <p className="text-xs text-blue-600">{weather.precipitation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
