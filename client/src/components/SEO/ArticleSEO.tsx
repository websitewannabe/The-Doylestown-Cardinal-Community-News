
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSEOProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
}

const BASE_URL = 'https://doylestowncardinal.com/articles/';
const DEFAULT_IMAGE = '/images/The_Cardinal_Paper.png';

export const ArticleSEO: React.FC<ArticleSEOProps> = ({
  title,
  excerpt,
  slug,
  image
}) => {
  const canonicalUrl = `${BASE_URL}${slug}`;
  const displayImage = image || DEFAULT_IMAGE;
  
  // Strip HTML tags from excerpt for meta description
  const cleanExcerpt = excerpt.replace(/<[^>]*>?/gm, '');
  
  return (
    <Helmet>
      <title>{title} | The Doylestown Cardinal</title>
      <meta name="description" content={cleanExcerpt} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={cleanExcerpt} />
      <meta property="og:image" content={displayImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={cleanExcerpt} />
      <meta name="twitter:image" content={displayImage} />
    </Helmet>
  );
};

export default ArticleSEO;
