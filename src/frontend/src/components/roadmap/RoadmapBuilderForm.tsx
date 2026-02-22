import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { getRoadmapTemplate, type RoadmapData } from './roadmapTemplates';
import { toast } from 'sonner';
import CareerPathSelector from './CareerPathSelector';

interface RoadmapBuilderFormProps {
  onGenerate: (data: RoadmapData) => void;
}

export default function RoadmapBuilderForm({ onGenerate }: RoadmapBuilderFormProps) {
  const [career, setCareer] = useState('');
  const [year, setYear] = useState('');
  const [skills, setSkills] = useState('');
  const [studyHours, setStudyHours] = useState('');

  const handleGenerate = () => {
    if (!career || !year || !studyHours) {
      toast.error('Please fill in all required fields');
      return;
    }

    const hours = parseFloat(studyHours);
    if (isNaN(hours) || hours <= 0) {
      toast.error('Please enter valid study hours (greater than 0)');
      return;
    }

    const roadmap = getRoadmapTemplate(career, year, skills, hours);
    onGenerate(roadmap);
    toast.success('Roadmap generated successfully!');
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="career">Select Career Path *</Label>
          <CareerPathSelector value={career} onValueChange={setCareer} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Current Year *</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger id="year">
              <SelectValue placeholder="Select your current year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1st">1st Year</SelectItem>
              <SelectItem value="2nd">2nd Year</SelectItem>
              <SelectItem value="3rd">3rd Year</SelectItem>
              <SelectItem value="Final">Final Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Current Skills</Label>
          <Textarea
            id="skills"
            placeholder="e.g., HTML, CSS, JavaScript, Python (Leave empty if you're a beginner)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            rows={3}
          />
          <p className="text-sm text-muted-foreground">
            Leave empty if you're a beginner
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="studyHours">Weekly Study Hours *</Label>
          <Input
            id="studyHours"
            type="number"
            placeholder="10"
            value={studyHours}
            onChange={(e) => setStudyHours(e.target.value)}
            min="1"
            max="168"
          />
          <p className="text-sm text-muted-foreground">
            How many hours per week can you dedicate to learning?
          </p>
        </div>

        <Button onClick={handleGenerate} className="w-full" size="lg">
          <Sparkles className="mr-2 h-5 w-5" />
          Generate My Roadmap
        </Button>
      </CardContent>
    </Card>
  );
}
