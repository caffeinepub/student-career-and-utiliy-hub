import { lazy, useState } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { careerRoadmapContent, careerRoadmapFAQs } from '../../seo/content/careerRoadmap';
import type { RoadmapData } from '../../components/roadmap/roadmapTemplates';

const RoadmapBuilderForm = lazy(() => import('../../components/roadmap/RoadmapBuilderForm'));
const RoadmapTimeline = lazy(() => import('../../components/roadmap/RoadmapTimeline'));

export default function CareerRoadmapGeneratorPage() {
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);

  const toolComponent = (
    <div className="space-y-12">
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
