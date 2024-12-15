// SEO helper functions and constants
export const DEFAULT_SEO = {
  title: 'Adlet - LED Sign Boards & Custom Business Cards | Innovative Advertising Solutions',
  description: 'Kerala\'s leading provider of LED advertising boards, custom NFC visiting cards, and innovative sign boards. Premium quality LED displays and advertising products for modern businesses.',
  keywords: [
    'Adlet',
    'LED sign boards',
    'clip on boards',
    'LED advertising boards',
    'NFC cards',
    'visiting cards',
    'custom visiting cards',
    'advertising',
    'advertising products',
    'sign boards',
    'LED boards',
    'Kerala'
    'Adlet.in'
  ].join(', ')
};

// Generate page-specific meta tags
export const generateMetaTags = (
  title: string,
  description: string,
  path: string,
  keywords?: string
) => {
  const fullTitle = title === DEFAULT_SEO.title ? title : `${title} | Adlet`;
  const fullUrl = `https://adlet.com${path}`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords || DEFAULT_SEO.keywords,
    url: fullUrl,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000'
  };
};
