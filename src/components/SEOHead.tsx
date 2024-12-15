import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  path: string;
  keywords?: string;
}

export function SEOHead({ title, description, image, path, keywords }: SEOHeadProps) {
  const siteUrl = 'https://adlet.com';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000';
  const defaultKeywords = 'Adlet, LED sign boards, custom visiting cards, NFC business cards, LED advertising boards, advertising products, sign boards Kerala';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}