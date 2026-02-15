import { useState } from 'react';
import { Calendar, Calculator, Activity, ArrowLeftRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AgeCalculator from '../tools/utilities/AgeCalculator';
import EmiCalculator from '../tools/utilities/EmiCalculator';
import BmiCalculator from '../tools/utilities/BmiCalculator';
import UnitConverter from '../tools/utilities/UnitConverter';

type ToolType = 'age' | 'emi' | 'bmi' | 'unit' | null;

export default function DailyUtilitiesSection() {
  const [openTool, setOpenTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'age' as ToolType,
      icon: Calendar,
      title: 'Age Calculator',
      description: 'Calculate your exact age in years, months, and days'
    },
    {
      id: 'emi' as ToolType,
      icon: Calculator,
      title: 'EMI Calculator',
      description: 'Calculate monthly loan EMI payments'
    },
    {
      id: 'bmi' as ToolType,
      icon: Activity,
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index'
    },
    {
      id: 'unit' as ToolType,
      icon: ArrowLeftRight,
      title: 'Unit Converter',
      description: 'Convert between different units'
    }
  ];

  const renderToolContent = () => {
    switch (openTool) {
      case 'age':
        return <AgeCalculator />;
      case 'emi':
        return <EmiCalculator />;
      case 'bmi':
        return <BmiCalculator />;
      case 'unit':
        return <UnitConverter />;
      default:
        return null;
    }
  };

  const getToolTitle = () => {
    const tool = tools.find((t) => t.id === openTool);
    return tool?.title || '';
  };

  return (
    <section id="daily-utilities" className="py-16 md:py-24 px-4 scroll-margin-nav bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Daily Utility Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick and easy calculators for everyday use
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
            {renderToolContent()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
