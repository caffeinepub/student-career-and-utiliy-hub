import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface Subject {
  id: string;
  credits: string;
  grade: string;
}

const gradePoints: Record<string, number> = {
  'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'P': 4, 'F': 0
};

export default function CgpaSgpaCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', credits: '', grade: '' }
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), credits: '', grade: '' }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: 'credits' | 'grade', value: string) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credits = parseFloat(subject.credits);
      const points = gradePoints[subject.grade];
      if (!isNaN(credits) && points !== undefined) {
        totalCredits += credits;
        totalPoints += credits * points;
      }
    });

    if (totalCredits === 0) return { cgpa: 0, percentage: 0 };

    const cgpa = totalPoints / totalCredits;
    const percentage = (cgpa - 0.75) * 10; // Common Indian conversion formula

    return { cgpa, percentage };
  };

  const { cgpa, percentage } = calculateCGPA();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <Card key={subject.id}>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label>Subject {index + 1} Credits</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 4"
                    value={subject.credits}
                    onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                    min="0"
                    step="0.5"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Label>Grade</Label>
                  <Select value={subject.grade} onValueChange={(value) => updateSubject(subject.id, 'grade', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade} ({gradePoints[grade]})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={addSubject} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Subject
      </Button>

      {cgpa > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">CGPA / SGPA</p>
                <p className="text-3xl font-bold text-primary">{cgpa.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Percentage</p>
                <p className="text-3xl font-bold text-primary">{percentage.toFixed(2)}%</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Formula: Percentage = (CGPA - 0.75) × 10
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
