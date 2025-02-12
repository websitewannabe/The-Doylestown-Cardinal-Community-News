import React, { useState } from "react";
import {
  Users,
  BarChart,
  Target,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  X,
  Building2,
  Megaphone,
  Globe,
  PieChart,
  TrendingUp,
  DollarSign,
  Sparkles,
  Rocket,
  Award,
  Zap,
  Star,
} from "lucide-react";

// Mock data for pricing packages
const pricingPackages = [
  {
    name: "Starter",
    price: "$499",
    description:
      "Perfect for small businesses looking to establish their presence",
    features: [
      "Quarter-page print ad",
      "Basic digital display ads",
      "1 sponsored article",
      "Social media mention",
    ],
    icon: Rocket,
    popular: false,
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for businesses ready to expand their reach",
    features: [
      "Half-page print ad",
      "Premium digital display ads",
      "2 sponsored articles",
      "Social media campaign",
      "Newsletter feature",
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive coverage for maximum impact",
    features: [
      "Full-page print ads",
      "Premium ad placements",
      "Custom content series",
      "Integrated social campaign",
      "Event sponsorship",
      "Dedicated account manager",
    ],
    icon: Award,
    popular: false,
  },
];

// Mock data for benefits
const benefits = [
  {
    title: "Targeted Local Reach",
    description: "Connect with Doylestown's most engaged readers",
    stat: "25,000+",
    subtext: "Monthly Readers",
    icon: Target,
  },
  {
    title: "High Engagement",
    description: "Industry-leading engagement rates",
    stat: "4.5x",
    subtext: "Above Average",
    icon: Zap,
  },
  {
    title: "Brand Trust",
    description: "Leverage our trusted community presence",
    stat: "50+",
    subtext: "Years of Service",
    icon: Star,
  },
];

// Mock data for metrics
const metrics = {
  readership: {
    print: 15000,
    digital: 10000,
    newsletter: 5000,
  },
  engagement: {
    averageTimeOnSite: "4:30",
    clickThroughRate: "2.8%",
    socialFollowers: 12000,
  },
  demographics: {
    age: {
      "18-34": 35,
      "35-54": 45,
      "55+": 20,
    },
    income: {
      "Under $75k": 30,
      "$75k-$150k": 45,
      "$150k+": 25,
    },
  },
};

const advertisingOptions = [
  {
    title: "Digital Display Ads",
    description: "High-visibility banner and sidebar advertisements",
    icon: "🖥️",
    specs: [
      "Premium website placement",
      "Mobile-responsive design",
      "Click tracking analytics",
      "Flexible duration options",
    ],
  },
  {
    title: "Print Advertising",
    description: "Traditional print advertisements in our weekly edition",
    icon: "📰",
    specs: [
      "Full color options",
      "Multiple size choices",
      "Premium positioning",
      "Design assistance",
    ],
  },
  {
    title: "Sponsored Content",
    description: "Native advertising that tells your brand's story",
    icon: "✏️",
    specs: [
      "Professional writing",
      "SEO optimization",
      "Social promotion",
      "Permanent archive",
    ],
  },
];

const AdvertisePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactForm(false);
    alert(
      "Thank you for your interest! Our advertising team will contact you shortly.",
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex flex-col">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Advertising background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Grow Your Business with The Cardinal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Connect with Doylestown's most engaged audience through our
              trusted platform. Our multi-channel advertising solutions deliver
              real results for local businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ChevronRight size={20} />
              </button>
              <a
                href="#pricing"
                className="bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors inline-flex items-center gap-2"
              >
                View Pricing
                <ChevronRight size={20} />
              </a>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 -mt-20 relative z-10 bg-[#F2F0EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                    <p className="text-charcoal-gray/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-playfair text-3xl font-bold text-cardinal-red">
                    {benefit.stat}
                  </div>
                  <div className="text-charcoal-gray/60">{benefit.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Solutions Section */}
      <section id="options" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-charcoal-gray mb-16">
            Advertising Solutions
          </h2>

          {/* Digital Display Ads - Left to Right */}
          <div className="flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-2xl mb-4">Digital Display Ads</h3>
                <p className="text-charcoal-gray/70 mb-4">
                  High-visibility banner and sidebar advertisements
                </p>
                <ul className="space-y-2">
                  {advertisingOptions[0].specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Digital Marketing"
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Print Advertising - Right to Left */}
          <div className="flex flex-col-reverse md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
                alt="Print Advertising"
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-12">
              <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-2xl mb-4">Print Advertising</h3>
                <p className="text-charcoal-gray/70 mb-4">
                  Traditional print advertisements in our weekly edition
                </p>
                <ul className="space-y-2">
                  {advertisingOptions[1].specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsored Content - Left to Right */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-2xl mb-4">Sponsored Content</h3>
                <p className="text-charcoal-gray/70 mb-4">
                  Native advertising that tells your brand's story
                </p>
                <ul className="space-y-2">
                  {advertisingOptions[2].specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
                alt="Content Marketing"
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Advertising Section */}
      <section
        id="digital-ads"
        className="py-20 bg-[#F2F0EF] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-cardinal-red/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-green/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="bg-cardinal-red/10 text-cardinal-red text-sm font-semibold px-4 py-1 rounded-full mb-4 block">
                Digital Solutions
              </span>
            </div>
            <h2 className="font-playfair text-5xl font-bold text-charcoal-gray mb-6 leading-tight bg-gradient-to-r from-cardinal-red to-forest-green bg-clip-text text-transparent">
              Digital Advertising Solutions
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Reach our engaged online audience through strategic digital
              placements
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 relative">
            {/* Feature Image Box */}
            <div className="col-span-12 md:col-span-5 row-span-2">
              <div className="h-full border border-[#333333] rounded-lg overflow-hidden p-6 bg-white">
                <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                    alt="Digital Marketing"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Digital?</h3>
                <p className="text-charcoal-gray/70">
                  Connect with our engaged audience through strategic digital placements. Our multi-channel approach ensures maximum visibility for your brand.
                </p>
              </div>
            </div>

            {[
              {
                title: "Display Ads",
                icon: Globe,
                description: "Premium banner positions across our website",
                features: [
                  "High-visibility placements",
                  "Mobile-responsive",
                  "Targeted campaigns",
                ],
                gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
                cols: "md:col-span-7",
              },
              {
                title: "Newsletter Ads",
                icon: Mail,
                description: "Reach our dedicated email subscribers",
                features: [
                  "5,000+ subscribers",
                  "High open rates",
                  "Premium positioning",
                ],
                gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
                cols: "md:col-span-4",
              },
              {
                title: "Native Content",
                icon: Megaphone,
                description: "Engaging sponsored content that resonates",
                features: [
                  "Professional writing",
                  "Social promotion",
                  "SEO optimization",
                ],
                gradient: "from-orange-500/20 via-red-500/20 to-rose-500/20",
                cols: "md:col-span-3",
              },
            ].map((option, index) => (
              <div
                key={index}
                className={`group col-span-12 ${option.cols} p-6 border border-[#333333] rounded-lg bg-white`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`}
                ></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cardinal-red/20 to-forest-green/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-7 h-7 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-charcoal-gray to-charcoal-gray/80 bg-clip-text text-transparent">
                    {option.title}
                  </h3>
                </div>
                <p className="text-charcoal-gray/70 mb-8 text-lg">
                  {option.description}
                </p>
                <ul className="space-y-4">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="p-1 bg-forest-green/10 rounded-full group-hover/item:bg-forest-green/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-forest-green" />
                      </div>
                      <span className="text-charcoal-gray/80 group-hover/item:text-charcoal-gray transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Print Ads Section */}
      <section
        id="print-ads"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cardinal-red/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="bg-forest-green/10 text-forest-green text-sm font-semibold px-4 py-1 rounded-full mb-4 block">
                Print Solutions
              </span>
            </div>
            <h2 className="font-playfair text-5xl font-bold text-charcoal-gray mb-6 leading-tight bg-gradient-to-r from-forest-green to-cardinal-red bg-clip-text text-transparent">
              Print Advertising Solutions
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Make a lasting impression with our premium print advertising
              options
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 relative">
            {/* Feature Image Box */}
            <div className="col-span-12 md:col-span-5 row-span-2">
              <div className="h-full border border-[#333333] rounded-lg overflow-hidden p-6 bg-white">
                <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
                    alt="Print Marketing"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Print?</h3>
                <p className="text-charcoal-gray/70">
                  Make a lasting impression with traditional print advertising. Our premium print options offer tangible engagement with our dedicated readership.
                </p>
              </div>
            </div>

            {[
              {
                title: "Full Page Ads",
                icon: PieChart,
                description: "Maximum visibility in our print edition",
                features: [
                  "Premium positioning",
                  "High-quality print",
                  "Design assistance",
                ],
                gradient: "from-emerald-500/20 via-green-500/20 to-forest-green/20",
                cols: "md:col-span-7",
              },
              {
                title: "Section Sponsorship",
                icon: Building2,
                description: "Own a dedicated section of the paper",
                features: [
                  "Category exclusivity",
                  "Regular presence",
                  "Branded content",
                ],
                gradient: "from-red-500/20 via-rose-500/20 to-cardinal-red/20",
                cols: "md:col-span-4",
              },
              {
                title: "Classified Ads",
                icon: TrendingUp,
                description: "Targeted local reach at affordable rates",
                features: [
                  "Flexible sizes",
                  "Weekly placement",
                  "Quick turnaround",
                ],
                gradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
                cols: "md:col-span-3",
              },
            ].map((option, index) => (
              <div
                key={index}
                className={`group col-span-12 ${option.cols} p-6 border border-[#333333] rounded-lg bg-white`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`}
                ></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-forest-green/20 to-cardinal-red/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-7 h-7 text-forest-green" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-charcoal-gray to-charcoal-gray/80 bg-clip-text text-transparent">
                    {option.title}
                  </h3>
                </div>
                <p className="text-charcoal-gray/70 mb-8 text-lg">
                  {option.description}
                </p>
                <ul className="space-y-4">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="p-1 bg-forest-green/10 rounded-full group-hover/item:bg-forest-green/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-forest-green" />
                      </div>
                      <span className="text-charcoal-gray/80 group-hover/item:text-charcoal-gray transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Our Reach & Impact
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Connect with a highly engaged local audience through our trusted
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Users className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Readership</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Print Edition</span>
                    <span className="font-medium">
                      {metrics.readership.print.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Digital Readers</span>
                    <span className="font-medium">
                      {metrics.readership.digital.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: "35%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Newsletter Subscribers</span>
                    <span className="font-medium">
                      {metrics.readership.newsletter.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: "15%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <BarChart className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Engagement</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-charcoal-gray/70">
                    Average Time on Site
                  </div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.averageTimeOnSite}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-charcoal-gray/70">
                    Click-Through Rate
                  </div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.clickThroughRate}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-charcoal-gray/70">
                    Social Media Following
                  </div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.socialFollowers.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="group p-4 border border-[#333333] rounded-lg hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Target className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">
                  Demographics
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Age Distribution</h4>
                  <div className="space-y-2">
                    {Object.entries(metrics.demographics.age).map(
                      ([range, percentage]) => (
                        <div key={range}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{range}</span>
                            <span>{percentage}%</span>
                          </div>
                          <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-cardinal-red rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Household Income</h4>
                  <div className="space-y-2">
                    {Object.entries(metrics.demographics.income).map(
                      ([range, percentage]) => (
                        <div key={range}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{range}</span>
                            <span>{percentage}%</span>
                          </div>
                          <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-cardinal-red rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Advertising Packages
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Choose the perfect package to reach your target audience and
              achieve your marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg flex flex-col h-full ${
                  pkg.popular
                    ? "ring-2 ring-cardinal-red"
                    : "border border-[#333333]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cardinal-red text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cardinal-red/10 rounded-lg">
                      <pkg.icon className="w-6 h-6 text-cardinal-red" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="font-playfair text-3xl font-bold text-cardinal-red">
                      {pkg.price}
                      {pkg.price !== "Custom" && (
                        <span className="text-lg font-normal">/month</span>
                      )}
                    </div>
                    <p className="text-charcoal-gray/70 mt-2">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-gray/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <button
                      onClick={() => {
                        setSelectedPackage(pkg.name);
                        setShowContactForm(true);
                      }}
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                        pkg.popular
                          ? "bg-cardinal-red text-white hover:bg-cardinal-red/90"
                          : "border border-[#333333] hover:bg-cardinal-red hover:text-white hover:border-cardinal-red"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">
                  Contact Our Advertising Team
                </h2>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-cardinal-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Package *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.package}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        package: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select a package</option>
                    {pricingPackages.map((pkg) => (
                      <option key={pkg.name} value={pkg.name}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your advertising goals..."
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisePage;