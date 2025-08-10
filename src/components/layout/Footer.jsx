import React from 'react'
import { Sprout } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">LawnRevive</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transform builder-damaged soil into thriving lawns with our turnkey revival kits 
              and smart monitoring technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Soil Revival Kits</a></li>
              <li><a href="#" className="hover:text-gray-900">Smart Monitors</a></li>
              <li><a href="#" className="hover:text-gray-900">Care Guidance</a></li>
              <li><a href="#" className="hover:text-gray-900">Partner Portal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Installation Guide</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 LawnRevive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer