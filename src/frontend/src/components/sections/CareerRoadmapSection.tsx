import { useState } from 'react';
import { Rocket } from 'lucide-react';
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
            <Rocket className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            AI Career Roadmap Builder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized career roadmap tailored to your goals and current skills
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
