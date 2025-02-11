import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Share2, ThumbsUp, Calendar, User2, ChevronRight, Send } from 'lucide-react';

// Mock discussion data
const discussion = {
  id: 1,
  title: "Best local coffee shops for remote work?",
  content: "Looking for recommendations on coffee shops in Doylestown that are good for remote work. Need reliable WiFi and comfortable seating for long sessions.",
  author: "Michael Brown",
  authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  date: "2024-03-18",
  category: "Recommendations",
  replies: 23,
  likes: 15
};

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "Nonno's Italian Coffee Parlor has great WiFi and plenty of seating. They also don't mind if you stay for a few hours.",
    date: "2024-03-18",
    likes: 8
  },
  {
    id: 2,
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    content: "I recommend trying the Doylestown Bookshop's café area. They have a quiet atmosphere and good coffee.",
    date: "2024-03-18",
    likes: 5
  }
];

// Mock related discussions
const relatedDiscussions = [
  {
    id: 2,
    title: "Weekend farmers market schedule",
    author: "Lisa Johnson",
    date: "2024-03-17",
    replies: 18
  },
  {
    id: 3,
    title: "New restaurant opening on Main Street",
    author: "Rachel Thompson",
    date: "2024-03-15",
    replies: 32
  }
];

const DiscussionPostPage = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
            Home
          </Link>
          <span className="text-charcoal-gray/40">/</span>
          <Link to="/community" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
            Community
          </Link>
          <span className="text-charcoal-gray/40">/</span>
          <span className="text-cardinal-red">Discussion</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Discussion Post */}
            <div className="bg-[#F2F0EF] rounded-lg border border-[#333333] p-8 mb-8">
              <div className="flex items-start gap-4">
                <img
                  src={discussion.authorImage}
                  alt={discussion.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{discussion.author}</span>
                    <span className="text-charcoal-gray/40">•</span>
                    <span className="text-sm text-charcoal-gray/60">{discussion.date}</span>
                    <span className="text-charcoal-gray/40">•</span>
                    <span className="text-cardinal-red text-sm">{discussion.category}</span>
                  </div>
                  <h1 className="font-playfair text-2xl font-bold mb-4">
                    {discussion.title}
                  </h1>
                  <p className="text-charcoal-gray/80 mb-6">
                    {discussion.content}
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                      <MessageCircle size={18} />
                      <span>{discussion.replies} Replies</span>
                    </button>
                    <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                      <ThumbsUp size={18} />
                      <span>{discussion.likes} Likes</span>
                    </button>
                    <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="bg-[#F2F0EF] rounded-lg border border-[#333333] p-6 mb-8">
              <h2 className="font-playfair text-xl font-bold mb-4">Leave a Reply</h2>
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF] mb-4"
                  rows={4}
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                >
                  <Send size={18} />
                  Post Reply
                </button>
              </form>
            </div>

            {/* Comments */}
            <div className="space-y-6 mb-8">
              {comments.map(comment => (
                <div key={comment.id} className="bg-[#F2F0EF] rounded-lg border border-[#333333] p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.authorImage}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-charcoal-gray/40">•</span>
                        <span className="text-sm text-charcoal-gray/60">{comment.date}</span>
                      </div>
                      <p className="text-charcoal-gray/80 mb-4">
                        {comment.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                          <ThumbsUp size={16} />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-[#F2F0EF] rounded-lg border border-[#333333] p-6 sticky top-32">
              <h2 className="font-playfair text-xl font-bold mb-6">Related Discussions</h2>
              <div className="space-y-6">
                {relatedDiscussions.map(discussion => (
                  <Link
                    key={discussion.id}
                    to={`/community/discussion/${discussion.id}`}
                    className="block group"
                  >
                    <h3 className="font-medium group-hover:text-cardinal-red transition-colors mb-2">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center text-sm text-charcoal-gray/60">
                      <User2 size={14} className="mr-1" />
                      <span>{discussion.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{discussion.date}</span>
                      <span className="mx-2">•</span>
                      <MessageCircle size={14} className="mr-1" />
                      <span>{discussion.replies} replies</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/community"
                className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mt-6"
              >
                View All Discussions
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPostPage;