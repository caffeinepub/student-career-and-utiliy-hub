import { useState, lazy, Suspense } from 'react';
import { Calculator, Calendar, Percent, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Lazy load tool components
const CgpaSgpaCalculator = lazy(() => import('../tools/academic/CgpaSgpaCalculator'));
const AttendanceCalculator = lazy(() => import('../tools/academic/AttendanceCalculator'));
const PercentageCalculator = lazy(() => import('../tools/academic/PercentageCalculator'));
const MarksPredictor = lazy(() => import('../tools/academic/MarksPredictor'));

type ToolType = 'cgpa' | 'attendance' | 'percentage' | 'marks' | null;

export default function AcademicToolsSection() {
  const [openTool, setOpenTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'cgpa' as ToolType,
      icon: Calculator,
      title: 'CGPA / SGPA Calculator',
      description: 'Calculate your CGPA and percentage with credit-based grading'
    },
    {
      id: 'attendance' as ToolType,
      icon: Calendar,
      title: 'Attendance Calculator',
      description: 'Track attendance and see how many classes you can miss'
    },
    {
      id: 'percentage' as ToolType,
      icon: Percent,
      title: 'Percentage Calculator',
      description: 'Quick percentage calculation for marks and scores'
    },
    {
      id: 'marks' as ToolType,
      icon: TrendingUp,
      title: 'Marks Predictor',
      description: 'Predict your final score based on internal and exam marks'
    }
  ];

  const renderToolContent = () => {
    switch (openTool) {
      case 'cgpa':
        return <CgpaSgpaCalculator />;
      case 'attendance':
        return <AttendanceCalculator />;
      case 'percentage':
        return <PercentageCalculator />;
      case 'marks':
        return <MarksPredictor />;
      default:
        return null;
    }
  };

  const getToolTitle = () => {
    const tool = tools.find((t) => t.id === openTool);
    return tool?.title || '';
  };

  return (
    <section id="academic-tools" className="py-16 md:py-24 px-4 scroll-margin-nav">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Academic Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful calculators to track and manage your academic performance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              {renderToolContent()}
            </Suspense>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
