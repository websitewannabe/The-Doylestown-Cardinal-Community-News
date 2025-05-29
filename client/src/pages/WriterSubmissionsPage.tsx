
import React, { useState } from 'react';
import { Send, CheckCircle, XCircle, Copy, Download, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  articleTitle: string;
  articleBody: string;
}

interface ComparisonResult {
  original: string;
  revised: string;
  suggestions: string[];
}

const WriterSubmissionsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    articleTitle: '',
    articleBody: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.articleBody.trim()) {
      setError('Please provide article content to review.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/grammar-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleBody: formData.articleBody,
          authorName: formData.fullName,
          articleTitle: formData.articleTitle
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process grammar check');
      }

      const result = await response.json();
      setComparisonResult({
        original: formData.articleBody,
        revised: result.revisedText,
        suggestions: result.suggestions || []
      });
      setCurrentText(formData.articleBody);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while checking grammar');
    } finally {
      setIsLoading(false);
    }
  };

  const acceptAllRevisions = () => {
    if (comparisonResult) {
      setCurrentText(comparisonResult.revised);
      setFormData(prev => ({
        ...prev,
        articleBody: comparisonResult.revised
      }));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadText = (text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
            alt="Writer Submissions"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#c32026]/80 to-[#231f1f]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-16 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Writer Submissions
            </h1>
            <p className="text-2xl text-off-white mb-8 font-playfair italic max-w-2xl">
              Submit your articles for professional grammar and spell checking
            </p>
            <a 
              href="#submit-form"
              className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
            >
              Get Started
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20" id="submit-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
                Submit Your Article
              </h2>
              <p className="text-lg text-charcoal-gray/70">
                Our AI-powered grammar checker will review your article and provide suggestions for improvement.
              </p>
            </div>

            {/* Submission Form */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 focus:border-cardinal-red"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 focus:border-cardinal-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    name="articleTitle"
                    value={formData.articleTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your article title"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 focus:border-cardinal-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Content *
                  </label>
                  <textarea
                    name="articleBody"
                    value={formData.articleBody}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    placeholder="Paste or type your article content here. Our AI will check it for grammar, spelling, and style improvements..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 focus:border-cardinal-red resize-vertical"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Tip: Include your complete article for the best grammar checking results
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit for Review
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Results Section */}
            {comparisonResult && (
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal-gray">
                    Grammar Check Results
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={acceptAllRevisions}
                      className="px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-forest-green/90 transition-colors flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Accept All Changes
                    </button>
                  </div>
                </div>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Original Text</h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(comparisonResult.original)}
                          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Copy original text"
                        >
                          <Copy size={16} />
                        </button>
                        <button
                          onClick={() => downloadText(comparisonResult.original, `${formData.articleTitle}_original.txt`)}
                          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Download original text"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                        {comparisonResult.original}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Revised Text</h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(comparisonResult.revised)}
                          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Copy revised text"
                        >
                          <Copy size={16} />
                        </button>
                        <button
                          onClick={() => downloadText(comparisonResult.revised, `${formData.articleTitle}_revised.txt`)}
                          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Download revised text"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                        {comparisonResult.revised}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                {comparisonResult.suggestions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">Suggestions & Notes</h4>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <ul className="space-y-2">
                        {comparisonResult.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-cardinal-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-semibold mb-2">Submit Your Article</h3>
              <p className="text-gray-600 text-sm">Fill out the form with your article content and writer details.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cardinal-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-semibold mb-2">AI Review</h3>
              <p className="text-gray-600 text-sm">Our AI checks for grammar, spelling, and style improvements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cardinal-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-cardinal-red" />
              </div>
              <h3 className="font-semibold mb-2">Review & Accept</h3>
              <p className="text-gray-600 text-sm">Compare original and revised versions, then accept the changes you want.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WriterSubmissionsPage;
