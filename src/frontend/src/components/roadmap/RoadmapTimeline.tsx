import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target, Wrench, Briefcase, Calendar, IndianRupee } from 'lucide-react';
import type { RoadmapData } from './roadmapTemplates';

interface RoadmapTimelineProps {
  data: RoadmapData;
}

export default function RoadmapTimeline({ data }: RoadmapTimelineProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <Badge className="mb-4" variant="secondary">
          Your Personalized Roadmap
        </Badge>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
          {data.career} Career Path
        </h3>
        <p className="text-muted-foreground mt-2">
          Current Year: {data.year} | Study Hours: {data.studyHours}hrs/week
        </p>
      </div>

      {/* Required Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Required Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {data.requiredSkills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tools to Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Tools to Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {data.toolsToLearn.map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Recommended Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.recommendedProjects.map((project, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Internship Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Internship Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.internshipStrategy.map((strategy, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Monthly Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            3-6-12 Month Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">3 Month Goals</h4>
            <ul className="space-y-2">
              {data.monthlyPlan.threeMonth.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">6 Month Goals</h4>
            <ul className="space-y-2">
              {data.monthlyPlan.sixMonth.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">12 Month Goals</h4>
            <ul className="space-y-2">
              {data.monthlyPlan.twelveMonth.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Salary Range */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            Expected Salary Range (India)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-primary">{data.salaryRange}</p>
          <p className="text-sm text-muted-foreground mt-2">
            *Estimates based on industry averages. Actual salaries may vary based on company, location, and skills.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
