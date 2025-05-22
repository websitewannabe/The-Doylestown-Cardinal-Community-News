
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSEOProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
}

const BASE_URL = 'https://doylestowncardinal.com/articles/';

const ArticleSEO: React.FC<ArticleSEOProps> = ({
  title,
  excerpt,
  slug,
  image = '/images/The_Cardinal_Paper.png'
}) => {
  const canonicalUrl = `${BASE_URL}${slug}`;
  const cleanExcerpt = excerpt?.replace(/<[^>]*>?/gm, '') || '';
  
  return (
    <Helmet>
      <title>{`${title} | The Doylestown Cardinal`}</title>
      <meta name="description" content={cleanExcerpt} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={cleanExcerpt} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={cleanExcerpt} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default ArticleSEO;
