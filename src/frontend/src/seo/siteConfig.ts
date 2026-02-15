// Single source of truth for SEO configuration
export const getSiteBaseUrl = (): string => {
  // In production, use the actual deployed URL
  // Fallback to current origin for development
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'https://studenthub.com'; // fallback
};

export const siteConfig = {
  name: 'Student Hub',
  description: 'Free SGPA & CGPA calculator, AI career roadmap generator, resume bullet creator, attendance tracker and student utility tools. Designed for engineering students in India.',
  keywords: 'SGPA calculator, CGPA calculator, career roadmap generator, resume bullet generator, attendance calculator, engineering students India, student tools',
  ogImage: '/assets/generated/hero-illustration.dim_900x600.png',
  twitterHandle: '@studenthub',
};
