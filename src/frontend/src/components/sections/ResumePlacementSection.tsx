import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { FileText, Mail, CheckSquare, Linkedin, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ResumeBulletGenerator from '../tools/resume/ResumeBulletGenerator';
import InternshipEmailTemplateGenerator from '../tools/resume/InternshipEmailTemplateGenerator';
import InterviewPrepChecklist from '../tools/resume/InterviewPrepChecklist';
import LinkedInProfileChecklist from '../tools/resume/LinkedInProfileChecklist';

type ToolType = 'resume' | 'email' | 'interview' | 'linkedin' | null;

export default function ResumePlacementSection() {
  const navigate = useNavigate();
  const [openTool, setOpenTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'resume' as ToolType,
      icon: FileText,
      title: 'Resume Bullet Generator',
      description: 'Create impactful resume bullet points'
    },
    {
      id: 'email' as ToolType,
      icon: Mail,
      title: 'Internship Email Template',
      description: 'Professional email templates for internship applications'
    },
    {
      id: 'interview' as ToolType,
      icon: CheckSquare,
      title: 'Interview Prep Checklist',
      description: 'Complete checklist to ace your interviews'
    },
    {
      id: 'linkedin' as ToolType,
      icon: Linkedin,
      title: 'LinkedIn Profile Checklist',
      description: 'Optimize your LinkedIn profile for recruiters'
    }
  ];

  const renderToolContent = () => {
    switch (openTool) {
      case 'resume':
        return <ResumeBulletGenerator />;
      case 'email':
        return <InternshipEmailTemplateGenerator />;
      case 'interview':
        return <InterviewPrepChecklist />;
      case 'linkedin':
        return <LinkedInProfileChecklist />;
      default:
        return null;
    }
  };

  const getToolTitle = () => {
    const tool = tools.find((t) => t.id === openTool);
    return tool?.title || '';
  };

  return (
    <section id="resume-placement" className="py-16 md:py-24 px-4 scroll-margin-nav">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Resume & Placement Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools to help you land your dream internship or job
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* ATS Resume Generator - Full Page Tool */}
          <Card
            className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            onClick={() => navigate({ to: '/ats-resume-generator' })}
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">ATS Resume Generator</CardTitle>
              <CardDescription>Build ATS-friendly resumes that pass screening</CardDescription>
            </CardHeader>
          </Card>

          {/* Existing Modal-Based Tools */}
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.id}
                className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                onClick={() => setOpenTool(tool.id)}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Dialog open={openTool !== null} onOpenChange={() => setOpenTool(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{getToolTitle()}</DialogTitle>
            </DialogHeader>
            {renderToolContent()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
