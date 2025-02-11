import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Heart, 
  Newspaper, 
  Users, 
  Award, 
  Calendar,
  Check,
  CreditCard,
  DollarSign,
  Gift,
  Building2,
  Mail,
  Target,
  Globe,
  Megaphone,
  Briefcase
} from 'lucide-react';

const donationLevels = [
  {
    id: 'supporter',
    name: 'Supporter',
    amount: '$50',
    period: 'one-time',
    description: 'Help sustain local journalism in Doylestown',
    benefits: [
      'Digital access for 3 months',
      'Donor newsletter subscription',
      'Name listed on donor page'
    ],
    popular: false
  },
  {
    id: 'patron',
    name: 'Patron',
    amount: '$100',
    period: 'one-time',
    description: 'Make a significant impact on our community coverage',
    benefits: [
      'Digital access for 6 months',
      'Donor newsletter subscription',
      'Name listed on donor page',
      'Exclusive Cardinal tote bag',
      'Early access to events'
    ],
    popular: true
  },
  {
    id: 'benefactor',
    name: 'Benefactor',
    amount: '$250',
    period: 'one-time',
    description: 'Become a major supporter of local journalism',
    benefits: [
      'Digital access for 1 year',
      'Donor newsletter subscription',
      'Featured listing on donor page',
      'Exclusive Cardinal tote bag',
      'Priority event access',
      'Annual lunch with the editor'
    ],
    popular: false
  }
];

const impactStats = [
  {
    title: 'Local Stories',
    stat: '1,000+',
    description: 'Articles published annually',
    icon: Newspaper
  },
  {
    title: 'Community Impact',
    stat: '50,000+',
    description: 'Monthly readers reached',
    icon: Users
  },
  {
    title: 'Recognition',
    stat: '15+',
    description: 'Journalism awards',
    icon: Award
  },
  {
    title: 'Legacy',
    stat: '50+',
    description: 'Years serving Doylestown',
    icon: Calendar
  }
];

const sponsorshipTiers = [
  {
    name: "Community Partner",
    amount: "$1,000",
    period: "annually",
    benefits: [
      "Recognition in print and digital editions",
      "Logo placement on website",
      "4 digital subscriptions",
      "Quarterly social media mentions",
      "Event sponsorship opportunities"
    ],
    icon: Building2
  },
  {
    name: "Leadership Circle",
    amount: "$2,500",
    period: "annually",
    benefits: [
      "Premium placement in print and digital editions",
      "Featured logo placement on website",
      "8 digital subscriptions",
      "Monthly social media mentions",
      "Priority event sponsorship",
      "Annual recognition dinner",
      "Custom content opportunities"
    ],
    icon: Award
  },
  {
    name: "Publisher's Circle",
    amount: "Custom",
    period: "annually",
    benefits: [
      "Elite recognition across all platforms",
      "Premium website presence",
      "Unlimited digital subscriptions",
      "Dedicated social media strategy",
      "Exclusive event hosting",
      "Custom content series",
      "Strategic partnership opportunities"
    ],
    icon: Briefcase
  }
];

const DonatePage = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const handleDonate = (level: string) => {
    setSelectedLevel(level);
    // Handle donation process
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
            alt="Support Local Journalism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Support Local Journalism
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Your donation helps us continue delivering the independent, in-depth journalism 
              that keeps our community informed and connected.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#donate"
                className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
              >
                Donate Now
                <ChevronRight size={20} />
              </a>
              <Link
                to="/about"
                className="bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
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

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                  <stat.icon className="w-8 h-8 text-cardinal-red" />
                </div>
                <div className="font-playfair text-3xl font-bold text-cardinal-red mb-2">
                  {stat.stat}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-charcoal-gray/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center max-w-2xl mx-auto mb-12">
            Choose how you'd like to support The Cardinal. Your donation helps us maintain 
            our independence and continue serving our community.
          </p>

          {/* Donation Type Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-[#333333] p-1">
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  donationType === 'one-time'
                    ? 'bg-cardinal-red text-white'
                    : 'hover:bg-cardinal-red/5'
                }`}
                onClick={() => setDonationType('one-time')}
              >
                One-time
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  donationType === 'monthly'
                    ? 'bg-cardinal-red text-white'
                    : 'hover:bg-cardinal-red/5'
                }`}
                onClick={() => setDonationType('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Donation Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {donationLevels.map(level => (
              <div
                key={level.id}
                className={`relative bg-[#F2F0EF] rounded-lg p-8 ${
                  level.popular ? 'ring-2 ring-cardinal-red shadow-xl' : ''
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cardinal-red text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{level.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="font-playfair text-4xl font-bold">{level.amount}</span>
                    <span className="text-charcoal-gray/60 ml-2">{level.period}</span>
                  </div>
                  <p className="text-charcoal-gray/70 mt-2">{level.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {level.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleDonate(level.id)}
                  className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                >
                  Donate {level.amount}
                </button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto">
            <div className="bg-[#F2F0EF] rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-4 text-center">
                Custom Amount
              </h3>
              <div className="relative mb-4">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray/60" />
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
              <button
                onClick={() => handleDonate('custom')}
                className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Other Ways to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <div className="p-3 bg-cardinal-red/10 rounded-lg inline-block mb-4">
                <CreditCard className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Subscribe</h3>
              <p className="text-charcoal-gray/70 mb-4">
                Support us through a digital or print subscription for regular access to our content.
              </p>
              <Link
                to="/digital-subscriptions"
                className="text-cardinal-red hover:text-forest-green transition-colors inline-flex items-center"
              >
                View Plans
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="p-3 bg-cardinal-red/10 rounded-lg inline-block mb-4">
                <Gift className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Gift Subscriptions</h3>
              <p className="text-charcoal-gray/70 mb-4">
                Share the gift of local journalism with friends and family through a gift subscription.
              </p>
              <Link
                to="/gift-subscriptions"
                className="text-cardinal-red hover:text-forest-green transition-colors inline-flex items-center"
              >
                Give a Gift
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="p-3 bg-cardinal-red/10 rounded-lg inline-block mb-4">
                <Building2 className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Corporate Support</h3>
              <p className="text-charcoal-gray/70 mb-4">
                Learn about corporate sponsorship opportunities and advertising partnerships.
              </p>
              <Link
                to="/advertise"
                className="text-cardinal-red hover:text-forest-green transition-colors inline-flex items-center"
              >
                Learn More
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-6">
            Corporate Sponsorship
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center max-w-2xl mx-auto mb-12">
            Join leading organizations in supporting quality local journalism. Our corporate 
            sponsorship program offers unique opportunities to align your brand with trusted 
            community journalism.
          </p>

          {/* Sponsorship Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Target className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Brand Visibility</h3>
              <p className="text-charcoal-gray/70">
                Reach our engaged audience of 25,000+ monthly readers across print and digital platforms.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Globe className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-charcoal-gray/70">
                Demonstrate your commitment to local journalism and community development.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Megaphone className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-charcoal-gray/70">
                Tailored sponsorship packages to meet your organization's goals and objectives.
              </p>
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <tier.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{tier.name}</h3>
                </div>
                <div className="mb-6">
                  <div className="font-playfair text-3xl font-bold text-cardinal-red">
                    {tier.amount}
                  </div>
                  <div className="text-charcoal-gray/60">{tier.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-gray/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-charcoal-gray/70 mb-6">
              Interested in becoming a corporate sponsor? Contact our development team to discuss 
              custom sponsorship opportunities.
            </p>
            <a
              href="mailto:sponsorship@thecardinal.com"
              className="inline-flex items-center px-8 py-3 bg-forest-green text-white rounded-lg hover:bg-cardinal-red transition-colors"
            >
              Discuss Sponsorship
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-6">
            <Mail className="w-8 h-8 text-cardinal-red" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-4">
            Questions About Supporting The Cardinal?
          </h2>
          <p className="text-lg text-charcoal-gray/70 mb-8">
            Contact our development team to learn more about how your support makes a difference 
            or to discuss other ways to contribute.
          </p>
          <a
            href="mailto:support@thecardinal.com"
            className="inline-flex items-center px-8 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
          >
            Contact Us
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;