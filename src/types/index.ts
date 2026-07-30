export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalURL?: string | URL;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface FilmItem {
  id: string;
  title: string;
  director: string;
  synopsis: string;
  category: string;
  duration: string;
  image: string;
  year?: string;
}
