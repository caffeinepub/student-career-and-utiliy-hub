import HeroSection from '../components/sections/HeroSection';
import AdPlaceholder from '../components/monetization/AdPlaceholder';
import AcademicToolsSection from '../components/sections/AcademicToolsSection';
import CareerRoadmapSection from '../components/sections/CareerRoadmapSection';
import ResumePlacementSection from '../components/sections/ResumePlacementSection';
import DailyUtilitiesSection from '../components/sections/DailyUtilitiesSection';
import StructuredData from '../seo/StructuredData';
import { generateWebApplicationSchema, generateBreadcrumbSchema } from '../seo/jsonld';
import { getSiteBaseUrl } from '../seo/siteConfig';

export default function HomePage() {
  const baseUrl = getSiteBaseUrl();
  
  const schemas = [
    generateWebApplicationSchema(
      'Student Hub',
      'Free SGPA & CGPA calculator, AI career roadmap generator, resume bullet creator, attendance tracker and student utility tools for engineering students.',
      baseUrl
    ),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' }
    ])
  ];

  return (
    <>
      <StructuredData data={schemas} />
      <main className="scroll-smooth">
        <HeroSection />
        <AdPlaceholder location="after-hero" />
        <AcademicToolsSection />
        <AdPlaceholder location="between-sections" />
        <CareerRoadmapSection />
        <ResumePlacementSection />
        <DailyUtilitiesSection />
      </main>
    </>
  );
}
