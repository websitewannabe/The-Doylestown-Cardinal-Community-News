import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  FileText, 
  Send, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Mail,
  Calendar,
  Image,
  Newspaper,
  X
} from 'lucide-react';

const submissionTypes = [
  {
    name: "News Tips",
    description: "Share newsworthy information about local events, issues, or stories.",
    guidelines: [
      "Include relevant details: who, what, when, where, why",
      "Provide contact information for verification",
      "Include any supporting documentation",
      "Time-sensitive information is prioritized"
    ],
    icon: Newspaper
  },
  {
    name: "Community Stories",
    description: "Submit stories about local people, organizations, or initiatives making a difference.",
    guidelines: [
      "Focus on local impact and community relevance",
      "Include quotes and perspectives from those involved",
      "Provide high-quality images if available",
      "Stories should be 500-1000 words"
    ],
    icon: FileText
  },
  {
    name: "Event Announcements",
    description: "Submit upcoming events for consideration in our community calendar.",
    guidelines: [
      "Submit at least 2 weeks before the event",
      "Include complete event details and contact information",
      "Attach promotional materials if available",
      "Events must be open to the public"
    ],
    icon: Calendar
  },
  {
    name: "Photos & Media",
    description: "Share high-quality photos of local events, places, or community moments.",
    guidelines: [
      "High-resolution images only (minimum 1200px wide)",
      "Include caption information and photo credits",
      "Obtain permission from subjects if applicable",
      "Original, unedited photos preferred"
    ],
    icon: Image
  }
];

const EditorialSubmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    submissionType: '',
    title: '',
    content: '',
    files: null as File[] | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your submission. Our editorial team will review it and contact you if needed.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      submissionType: '',
      title: '',
      content: '',
      files: null
    });
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
            alt="Editorial Submissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Editorial Submissions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Share your stories, news tips, and community updates with The Cardinal. 
              Help us keep our community informed and connected.
            </p>
            <a 
              href="#submit"
              className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
            >
              Submit Now
              <ChevronRight size={20} />
            </a>
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

      {/* Submission Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Types of Submissions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {submissionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <type.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{type.name}</h3>
                </div>
                <p className="text-charcoal-gray/70 mb-6">{type.description}</p>
                <h4 className="font-medium mb-3">Guidelines:</h4>
                <ul className="space-y-2">
                  {type.guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-gray/80">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section id="submit" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-6">
            Submit Your Story
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center mb-12">
            Fill out the form below to submit your content for consideration. 
            Our editorial team will review your submission and contact you if needed.
          </p>

          <div className="bg-[#F2F0EF] rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Submission Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.submissionType}
                    onChange={(e) => setFormData(prev => ({ ...prev, submissionType: e.target.value }))}
                  >
                    <option value="">Select submission type</option>
                    {submissionTypes.map(type => (
                      <option key={type.name} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title/Subject *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content *
                </label>
                <textarea
                  required
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Share your story, news tip, or event details..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attachments
                </label>
                <input
                  type="file"
                  multiple
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    files: e.target.files ? Array.from(e.target.files) : null 
                  }))}
                />
                <p className="mt-1 text-sm text-charcoal-gray/60">
                  Accepted file types: Images (JPG, PNG), Documents (PDF, DOC)
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-cardinal-red flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-charcoal-gray/70">
                    <p className="font-medium mb-1">Important Note:</p>
                    <p>
                      By submitting content, you grant The Cardinal permission to publish your submission 
                      in print and digital formats. We reserve the right to edit submissions for length, 
                      clarity, and style.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Content
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-6">
            <Mail className="w-8 h-8 text-cardinal-red" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-4">
            Questions About Submissions?
          </h2>
          <p className="text-lg text-charcoal-gray/70 mb-8">
            Contact our editorial team for questions about submissions or to discuss 
            potential story ideas.
          </p>
          <a
            href="mailto:editorial@thecardinal.com"
            className="inline-flex items-center px-8 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
          >
            Contact Editorial Team
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default EditorialSubmissionsPage;