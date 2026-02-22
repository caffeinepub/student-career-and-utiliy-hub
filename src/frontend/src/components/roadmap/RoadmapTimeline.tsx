import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Clock, IndianRupee, Target, Users, Lightbulb, BookOpen, Building2 } from 'lucide-react';
import type { RoadmapData } from './roadmapTemplates';

interface RoadmapTimelineProps {
  data: RoadmapData;
}

export default function RoadmapTimeline({ data }: RoadmapTimelineProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Career Summary Block */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                {data.career}
              </h3>
              <p className="text-lg text-muted-foreground">
                {data.careerDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="h-4 w-4" />
                  <span>Level</span>
                </div>
                <p className="font-semibold text-foreground">{data.level}</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <IndianRupee className="h-4 w-4" />
                  <span>Average Salary</span>
                </div>
                <p className="font-semibold text-primary">{data.averageSalary}</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Timeline</span>
                </div>
                <p className="font-semibold text-foreground">{data.timeline}</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Category</span>
                </div>
                <p className="font-semibold text-foreground">{data.category}</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Your Learning Path */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
            Your Learning Path
          </h3>
          <p className="text-muted-foreground">
            Follow this structured roadmap to achieve your career goals
          </p>
        </div>

        {data.learningPhases.map((phase) => (
          <Card key={phase.number} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{phase.number}</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{phase.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {phase.duration}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-20">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Topics to Learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {phase.topics.map((topic, index) => (
                    <Badge key={index} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Resources:</h4>
                <ul className="space-y-1">
                  {phase.resources.map((resource, index) => (
                    <li key={index} className="text-sm text-foreground">
                      • {resource}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills You'll Master */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Skills You'll Master
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {data.skillsMastered.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Companies Hiring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Top Companies Hiring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {data.topCompanies.map((company, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {company}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Career Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.careerOpportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{opportunity}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Personalized Tips Based on Your Profile */}
      <Card className="bg-accent/5 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Personalized Tips Based on Your Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Your Study Plan
            </h4>
            <p className="text-muted-foreground">
              {data.personalizedTips.studyPlan}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Build Your Portfolio
            </h4>
            <p className="text-muted-foreground">
              {data.personalizedTips.portfolio}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Networking & Community
            </h4>
            <p className="text-muted-foreground">
              {data.personalizedTips.networking}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
