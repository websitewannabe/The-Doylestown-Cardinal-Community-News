import React, { useState } from 'react';
import { Search, Calendar, Filter, ChevronRight, Download, Eye, X } from 'lucide-react';

// Mock data for archived issues
const archivedIssues = [
  {
    id: 1,
    title: "The Cardinal - March 2024",
    date: "March 2024",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80",
    description: "Coverage of the historic theater renovation announcement and local arts festival preparations.",
    topics: ["Local News", "Arts & Culture", "Development"]
  },
  {
    id: 2,
    title: "The Cardinal - February 2024",
    date: "February 2024",
    thumbnail: "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?auto=format&fit=crop&q=80",
    description: "Special report on community sustainability initiatives and spring events preview.",
    topics: ["Environment", "Community", "Events"]
  },
  {
    id: 3,
    title: "The Cardinal - January 2024",
    date: "January 2024",
    thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80",
    description: "Local business spotlight and coverage of the winter arts festival.",
    topics: ["Business", "Arts & Culture", "Community"]
  },
  {
    id: 4,
    title: "The Cardinal - December 2023",
    date: "December 2023",
    thumbnail: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80",
    description: "Year in review: The stories that shaped Doylestown in 2023.",
    topics: ["Local News", "Community", "Year in Review"]
  },
  {
    id: 5,
    title: "The Cardinal - November 2023",
    date: "November 2023",
    thumbnail: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80",
    description: "Holiday season preview and community giving initiatives.",
    topics: ["Community", "Events", "Local Business"]
  },
  {
    id: 6,
    title: "The Cardinal - October 2023",
    date: "October 2023",
    thumbnail: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80",
    description: "Fall festivities and historic preservation special edition.",
    topics: ["Events", "History", "Development"]
  }
];

// Filter options
const years = ["All Years", "2024", "2023", "2022", "2021", "2020"];
const months = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const topics = [
  "All Topics",
  "Local News",
  "Arts & Culture",
  "Business",
  "Community",
  "Development",
  "Environment",
  "Events",
  "History",
  "Year in Review"
];

const ArchivePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedIssue, setSelectedIssue] = useState<typeof archivedIssues[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80"
            alt="Archive background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              The Cardinal Archives
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Browse through our monthly editions, documenting the history and stories of Doylestown 
              through the years.
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
              d="M0,120 
                 C180,90 360,120 540,100 
                 C720,80 900,110 1080,105 
                 C1260,100 1350,85 1440,95 
                 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search and Filter Bar */}
        <div className="border border-[#333333] rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray/60" size={20} />
              <input
                type="text"
                placeholder="Search archives..."
                className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archivedIssues.map(issue => (
            <div
              key={issue.id}
              className="border border-[#333333] rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIssue(issue)}
            >
              <div className="relative h-48">
                <img
                  src={issue.thumbnail}
                  alt={issue.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-charcoal-gray/60 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {issue.date}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                  {issue.title}
                </h3>
                <p className="text-charcoal-gray/70 text-sm mb-4">
                  {issue.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {issue.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Issue Preview Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedIssue.thumbnail}
                alt={selectedIssue.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedIssue(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-charcoal-gray/60 mb-2">
                <Calendar size={14} className="mr-1" />
                {selectedIssue.date}
              </div>
              <h2 className="font-playfair text-3xl font-bold mb-4">
                {selectedIssue.title}
              </h2>
              <p className="text-charcoal-gray/70 mb-6">
                {selectedIssue.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedIssue.topics.map(topic => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                  <Eye size={20} />
                  Read Online
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-[#333333] rounded-lg hover:bg-cardinal-red hover:text-white hover:border-cardinal-red transition-colors">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchivePage;