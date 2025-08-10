import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Truck, Shield, Smartphone } from 'lucide-react'

const KitOrdering = () => {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedKit, setSelectedKit] = useState('base')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const regions = [
    { id: 'northeast', name: 'Northeast', climate: 'Cool Season Grasses' },
    { id: 'southeast', name: 'Southeast', climate: 'Warm Season Grasses' },
    { id: 'midwest', name: 'Midwest', climate: 'Mixed Grasses' },
    { id: 'southwest', name: 'Southwest', climate: 'Drought Tolerant' },
    { id: 'west', name: 'West', climate: 'Mediterranean' },
    { id: 'pacific-northwest', name: 'Pacific Northwest', climate: 'Cool & Wet' },
  ]

  const kits = {
    base: {
      name: 'Base Revival Kit',
      price: 299,
      description: 'Complete soil rehabilitation kit with region-specific amendments and seeds',
      features: [
        'Soil amendments & compost',
        'Climate-specific seed mix',
        'Detailed application guide',
        'Phone support',
        'Growth guarantee'
      ]
    },
    smart: {
      name: 'Smart Monitor Kit',
      price: 499,
      description: 'Base kit plus IoT sensors and AI-powered care guidance',
      features: [
        'Everything in Base Kit',
        'Smart soil sensors (3x)',
        'Mobile app access',
        'AI care recommendations',
        'Real-time monitoring',
        'Weather integration'
      ]
    },
    pro: {
      name: 'Professional Kit',
      price: 799,
      description: 'Complete solution with premium support and extended monitoring',
      features: [
        'Everything in Smart Kit',
        'Professional soil analysis',
        'Custom blend amendments',
        'Priority support',
        '2-year monitoring plan',
        'Guaranteed results'
      ]
    }
  }

  const handleOrder = async () => {
    if (!selectedRegion) {
      alert('Please select your region first')
      return
    }

    setLoading(true)
    
    // Simulate order processing
    setTimeout(() => {
      setLoading(false)
      alert('Order placed successfully! You will receive confirmation via email.')
      navigate('/dashboard')
    }, 2000)
  }

  const selectedKitData = kits[selectedKit]

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display mb-4">Order Your LawnRevive Kit</h1>
          <p className="text-gray-600">
            Choose your region and kit type to get started with your lawn transformation
          </p>
        </div>

        {/* Region Selection */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Select Your Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedRegion === region.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{region.name}</div>
                <div className="text-sm text-gray-600">{region.climate}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Kit Selection */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Choose Your Kit</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(kits).map(([key, kit]) => (
              <div
                key={key}
                className={`border rounded-lg p-6 cursor-pointer transition-colors ${
                  selectedKit === key
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedKit(key)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold">{kit.name}</h3>
                  <div className="text-2xl font-bold text-primary">${kit.price}</div>
                  <p className="text-sm text-gray-600 mt-2">{kit.description}</p>
                </div>

                <ul className="space-y-2">
                  {kit.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedKit === key && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg text-center">
                    <span className="text-primary font-medium">Selected</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        {selectedRegion && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Order Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Selected Kit</h3>
                <p className="text-lg">{selectedKitData.name}</p>
                <p className="text-sm text-gray-600">{selectedKitData.description}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Region</h3>
                <p className="text-lg">
                  {regions.find(r => r.id === selectedRegion)?.name}
                </p>
                <p className="text-sm text-gray-600">
                  {regions.find(r => r.id === selectedRegion)?.climate}
                </p>
              </div>
            </div>

            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Subtotal:</span>
                <span className="text-lg">${selectedKitData.price}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Shipping:</span>
                <span className="text-lg text-green-600">FREE</span>
              </div>
              <div className="flex justify-between items-center text-xl font-semibold border-t pt-4">
                <span>Total:</span>
                <span>${selectedKitData.price}</span>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-sm text-gray-600">Delivered in 3-5 days</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium">Growth Guarantee</p>
              <p className="text-sm text-gray-600">Results or money back</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Smartphone className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium">Expert Support</p>
              <p className="text-sm text-gray-600">Phone & chat available</p>
            </div>
          </div>
        </div>

        {/* Order Button */}
        <div className="text-center">
          <button
            onClick={handleOrder}
            disabled={!selectedRegion || loading}
            className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : `Order ${selectedKitData.name} - $${selectedKitData.price}`}
          </button>
          <p className="text-sm text-gray-600 mt-3">
            Secure checkout • 30-day money back guarantee
          </p>
        </div>
      </div>
    </div>
  )
}

export default KitOrdering