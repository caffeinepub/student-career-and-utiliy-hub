import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import RoadmapBuilderForm from '../roadmap/RoadmapBuilderForm';
import RoadmapTimeline from '../roadmap/RoadmapTimeline';
import type { RoadmapData } from '../roadmap/roadmapTemplates';

export default function CareerRoadmapSection() {
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);

  return (
    <section id="career-roadmap" className="py-16 md:py-24 px-4 scroll-margin-nav bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            AI-Powered Career Planning
          </h2>
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground">
            Build Your Career Roadmap
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 200+ career paths and get a personalized learning roadmap with AI-powered recommendations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <RoadmapBuilderForm onGenerate={setRoadmapData} />
          {roadmapData && <RoadmapTimeline data={roadmapData} />}
        </div>
      </div>
    </section>
  );
}
