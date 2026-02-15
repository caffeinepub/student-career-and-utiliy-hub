import { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import StructuredData from '../../seo/StructuredData';
import { generateWebApplicationSchema, generateBreadcrumbSchema, generateFAQSchema } from '../../seo/jsonld';
import { getSiteBaseUrl } from '../../seo/siteConfig';
import type { ContentSection, FAQItem } from '../../seo/content/sgpa';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  toolComponent: ReactNode;
  content: ContentSection[];
  faqs: FAQItem[];
  breadcrumbName: string;
  canonicalPath: string;
}

export default function ToolPageLayout({
  title,
  description,
  toolComponent,
  content,
  faqs,
  breadcrumbName,
  canonicalPath,
}: ToolPageLayoutProps) {
  const baseUrl = getSiteBaseUrl();

  const schemas = [
    generateWebApplicationSchema(title, description, `${baseUrl}${canonicalPath}`),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: breadcrumbName, url: canonicalPath },
    ]),
    generateFAQSchema(faqs),
  ];

  // Process content to convert internal links to Link components
  const processContent = (htmlContent: string) => {
    // For now, keep as HTML with anchor tags - they'll work for navigation
    return htmlContent;
  };

  return (
    <>
      <StructuredData data={schemas} />
      <main className="scroll-smooth">
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
          {/* Tool Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
            {toolComponent}
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto space-y-12">
            {content.map((section, index) => (
              <div key={index}>
                {section.heading && section.heading !== 'Frequently Asked Questions' && (
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.content && (
                  <div 
                    className="text-base text-foreground/90 leading-relaxed space-y-4 prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: section.content
                        .split('\n\n')
                        .map(para => `<p class="mt-4">${para}</p>`)
                        .join('') 
                    }}
                  />
                )}
              </div>
            ))}

            {/* FAQ Section */}
            {faqs.length > 0 && (
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-0">
                      <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
