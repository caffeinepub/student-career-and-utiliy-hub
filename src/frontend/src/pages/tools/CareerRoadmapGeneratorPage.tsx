import { lazy, useState } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { careerRoadmapContent, careerRoadmapFAQs } from '../../seo/content/careerRoadmap';
import type { RoadmapData } from '../../components/roadmap/roadmapTemplates';
import { Sparkles } from 'lucide-react';

const RoadmapBuilderForm = lazy(() => import('../../components/roadmap/RoadmapBuilderForm'));
const RoadmapTimeline = lazy(() => import('../../components/roadmap/RoadmapTimeline'));

export default function CareerRoadmapGeneratorPage() {
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);

  const toolComponent = (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
          AI-Powered Career Planning
        </h2>
        <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
          Build Your Career Roadmap
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from 200+ career paths and get a personalized learning roadmap with AI-powered recommendations
        </p>
      </div>

      <RoadmapBuilderForm onGenerate={setRoadmapData} />
      {roadmapData && <RoadmapTimeline data={roadmapData} />}
    </div>
  );

  return (
    <ToolPageLayout
      title="AI Career Roadmap Generator for BTech Students"
      description="Generate personalized career roadmaps with AI. Get step-by-step guidance for 200+ career paths including software engineering, data science, and more."
      toolComponent={toolComponent}
      content={careerRoadmapContent}
      faqs={careerRoadmapFAQs}
      breadcrumbName="Career Roadmap Generator"
      canonicalPath="/career-roadmap-generator"
    />
  );
}
