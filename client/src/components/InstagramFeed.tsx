
import React, { useEffect, useState } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedProps {
  username: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ username }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/instagram-feed?username=${username}`);
        if (!response.ok) throw new Error('Failed to fetch Instagram posts');
        const data = await response.json();
        setPosts(data.data.slice(0, 4));
      } catch (err) {
        setError('Failed to load Instagram feed');
        console.error('Instagram feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white rounded-lg overflow-hidden"
        >
          <div className="relative aspect-square">
            <img
              src={post.media_url}
              alt={post.caption?.slice(0, 100) || 'Instagram post'}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              <div className="text-white text-sm">
                <p className="line-clamp-3">{post.caption}</p>
              </div>
              <div className="text-white/90 text-sm">
                <span>{new Date(post.timestamp).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
