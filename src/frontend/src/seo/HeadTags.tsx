import { useEffect } from 'react';
import { seoRoutes } from './seoRoutes';
import { getSiteBaseUrl, siteConfig } from './siteConfig';

interface HeadTagsProps {
  pathname: string;
}

export default function HeadTags({ pathname }: HeadTagsProps) {
  useEffect(() => {
    const seoData = seoRoutes[pathname] || seoRoutes['/'];
    const baseUrl = getSiteBaseUrl();
    const canonicalUrl = `${baseUrl}${seoData.canonicalPath}`;

    // Update title
    document.title = seoData.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);

    // Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:image', `${baseUrl}${seoData.ogImage || siteConfig.ogImage}`, true);
    updateMetaTag('og:site_name', siteConfig.name, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.ogTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.ogDescription || seoData.description);
    updateMetaTag('twitter:image', `${baseUrl}${seoData.ogImage || siteConfig.ogImage}`);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [pathname]);

  return null;
}
