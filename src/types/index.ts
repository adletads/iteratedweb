export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  category: string;
  keywords: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: 'BarChart' | 'Palette' | 'Globe';
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path: string;
  keywords?: string;
}