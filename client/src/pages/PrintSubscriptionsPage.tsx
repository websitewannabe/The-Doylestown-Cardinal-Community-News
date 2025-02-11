import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Mail, Calendar, Star, Info } from 'lucide-react';

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$5.99',
    period: 'per month',
    features: [
      'Weekly print edition delivery',
      'Unlimited digital access',
      'Access to digital archive',
      'Cancel anytime'
    ],
    popular: false
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$59.99',
    period: 'per year',
    features: [
      'Weekly print edition delivery',
      'Unlimited digital access',
      'Access to digital archive',
      'Two bonus special editions',
      'Save 17% vs monthly'
    ],
    popular: true
  },
  {
    id: 'student',
    name: 'Student',
    price: '$29.99',
    period: 'per year',
    features: [
      'Weekly print edition delivery',
      'Unlimited digital access',
      'Access to digital archive',
      'Valid student ID required'
    ],
    popular: false
  }
];

const benefits = [
  {
    title: 'Weekly Delivery',
    description: 'Get The Cardinal delivered to your doorstep every Wednesday.',
    icon: Calendar
  },
  {
    title: 'Digital Access',
    description: 'Enjoy unlimited access to our website and digital archive.',
    icon: Star
  },
  {
    title: 'Special Editions',
    description: 'Receive exclusive special editions throughout the year.',
    icon: Info
  },
  {
    title: 'Newsletter',
    description: 'Weekly curated newsletter with exclusive content.',
    icon: Mail
  }
];

const PrintSubscriptionsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Print Subscription"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Subscribe to The Cardinal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Get Doylestown's most trusted source of local news delivered to your doorstep every week.
              Choose the subscription plan that works best for you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="relative w-full h-[120px] text-[#F2F0EF] preserve-3d"
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor"
              d="M0,120 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Subscription Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                  <benefit.icon className="w-8 h-8 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-charcoal-gray/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative bg-[#F2F0EF] rounded-lg p-8 ${
                  plan.popular ? 'ring-2 ring-cardinal-red shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cardinal-red text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="font-playfair text-4xl font-bold">{plan.price}</span>
                    <span className="text-charcoal-gray/60 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold mb-2">When will I receive my first issue?</h3>
              <p className="text-charcoal-gray/70">
                Your first issue will arrive on the next Wednesday following your subscription start date.
                Digital access is available immediately upon subscription.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold mb-2">Can I cancel my subscription?</h3>
              <p className="text-charcoal-gray/70">
                Yes, you can cancel your subscription at any time. For monthly subscriptions, 
                you'll continue to receive issues through the end of your billing period.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold mb-2">What areas do you deliver to?</h3>
              <p className="text-charcoal-gray/70">
                We currently deliver to all addresses within Doylestown and surrounding 
                Bucks County communities. Contact us for specific delivery area questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintSubscriptionsPage;