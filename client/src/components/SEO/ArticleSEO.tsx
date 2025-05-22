
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSEOProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  keywords?: string[];
  category?: string;
}

const BASE_URL = 'https://doylestowncardinal.com/articles/';

const ArticleSEO: React.FC<ArticleSEOProps> = ({
  title,
  excerpt,
  slug,
  image = '/images/The_Cardinal_Paper.png',
  keywords = [],
  category
}) => {
  const canonicalUrl = `${BASE_URL}${slug}`;
  const cleanExcerpt = excerpt?.replace(/<[^>]*>?/gm, '') || '';
  
  // Combine keywords with category and title terms
  const allKeywords = [
    ...keywords,
    category,
    'Doylestown Cardinal',
    'local news',
    'Doylestown',
    'Bucks County',
    ...title.toLowerCase().split(' ')
  ].filter(Boolean).join(', ');

  return (
    <Helmet>
      <title>{`${title} | The Doylestown Cardinal`}</title>
      
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={cleanExcerpt} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={cleanExcerpt} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={cleanExcerpt} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="article:published_time" content={new Date().toISOString()} />
      <meta name="article:section" content={category} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default ArticleSEO;
