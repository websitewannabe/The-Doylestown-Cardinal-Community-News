
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Check, Smartphone, Laptop, Archive, Bell, BookOpen, Download, Newspaper, Wifi } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const plans = {
  digital: [
    {
      id: 'basic',
      name: 'Basic Digital',
      price: '$3.99',
      period: 'per month',
      features: [
        'Unlimited article access',
        'Digital edition viewer',
        'Breaking news alerts',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Digital',
      price: '$39.99',
      period: 'per year',
      features: [
        'Unlimited article access',
        'Digital edition viewer',
        'Complete archive access',
        'Breaking news alerts',
        'Ad-free reading experience',
        'Exclusive digital content',
        'Save 17% vs monthly'
      ],
      popular: true
    }
  ],
  print: [
    {
      id: 'print-basic',
      name: 'Print + Digital',
      price: '$4.99',
      period: 'per week',
      features: [
        'Weekly print delivery',
        'Full digital access',
        'Digital edition viewer',
        'Breaking news alerts'
      ],
      popular: true
    },
    {
      id: 'print-premium',
      name: 'Print + Digital Premium',
      price: '$219.99',
      period: 'per year',
      features: [
        'Weekly print delivery',
        'Full digital access',
        'Ad-free digital experience',
        'Complete archive access',
        'Exclusive content',
        'Save 15% vs monthly'
      ],
      popular: false
    }
  ]
};

const benefits = [
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Read on any device, anytime, anywhere"
  },
  {
    icon: Archive,
    title: "Complete Archive",
    description: "Access our entire digital archive"
  },
  {
    icon: Bell,
    title: "Breaking News",
    description: "Get alerts for important local stories"
  },
  {
    icon: Newspaper,
    title: "Print Edition",
    description: "Enjoy the traditional newspaper experience"
  }
];

const SubscriptionsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img 
            src="/images/paper-overlay.jpg"
            alt="Subscription Access"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-16 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Subscribe to The Cardinal
            </h1>
            <p className="text-xl text-off-white mb-8 max-w-2xl">
              Get unlimited access to Doylestown's most trusted source of local news and stories
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Subscription Benefits
          </h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          
          {/* Mobile Carousel */}
          <div className="md:hidden w-full">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center p-4">
                      <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                        <benefit.icon className="w-8 h-8 text-cardinal-red" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-charcoal-gray/70">{benefit.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Digital Plans */}
      <section id="digital-plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Digital Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.digital.map(plan => (
              <div
                key={plan.id}
                className={`relative bg-[#F2F0EF] rounded-lg p-8 flex flex-col h-full ${
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
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={20} className="text-cardinal-red flex-shrink-0" />
                      <span className="text-charcoal-gray">{feature}</span>
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

      {/* Print Plans */}
      <section id="print-plans" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Print Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.print.map(plan => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-lg p-8 flex flex-col h-full ${
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
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={20} className="text-cardinal-red flex-shrink-0" />
                      <span className="text-charcoal-gray">{feature}</span>
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
    </div>
  );
};

export default SubscriptionsPage;
