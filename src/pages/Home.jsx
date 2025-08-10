import React from 'react'
import { Link } from 'react-router-dom'
import { Sprout, Shield, Smartphone, Users } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Soil Revival Kits',
      description: 'Region-tailored rehabilitation kits with amendments, compost, and climate-specific seed mixes to revive dead yards.'
    },
    {
      icon: Smartphone,
      title: 'Smart Monitoring',
      description: 'IoT sensors paired with AI-driven care guidance track moisture, pH, and nutrients for optimal lawn health.'
    },
    {
      icon: Users,
      title: 'Partner Network',
      description: 'HOAs, builders, and real estate groups can access our co-branding portal and referral management system.'
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Accelerate turf establishment within a growing season with predictable costs and reduced frustration.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'LawnRevive transformed our builder-damaged yard into a beautiful lawn in just one season. The smart monitoring made it foolproof!'
    },
    {
      name: 'Mike Chen',
      role: 'HOA Board Member',
      content: 'Working with LawnRevive has helped our entire community improve property values. The bulk pricing made it affordable for everyone.'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-display mb-6">
              Transform Your <span className="text-primary">Builder-Damaged</span> Soil Into a Thriving Lawn
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional-grade soil revival kits paired with smart monitoring technology. 
              Get your lawn established within one growing season with our turnkey solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/order" className="btn-primary text-lg px-8 py-4">
                Order Your Kit
              </Link>
              <Link to="/signup" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display mb-4">Everything You Need for Lawn Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach combines proven soil science with modern technology 
              to give you the best chance at lawn success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display mb-4">How LawnRevive Works</h2>
            <p className="text-gray-600">Simple steps to transform your lawn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Select Your Region',
                description: 'Choose your climate zone and soil type to get a customized revival kit with region-specific amendments and seed mixes.'
              },
              {
                step: '2',
                title: 'Apply & Monitor',
                description: 'Follow our detailed guide to apply the kit. Optional smart sensors provide real-time soil health monitoring.'
              },
              {
                step: '3',
                title: 'AI-Guided Care',
                description: 'Receive personalized care recommendations and reminders to ensure optimal lawn establishment and growth.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-lg font-semibold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display mb-4">Success Stories</h2>
            <p className="text-gray-600">See what our customers have achieved</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display mb-4">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of homeowners who have successfully revived their builder-damaged soil.
          </p>
          <Link to="/order" className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home