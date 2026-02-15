import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function MarksPredictor() {
  const [internalMarks, setInternalMarks] = useState('');
  const [expectedExamMarks, setExpectedExamMarks] = useState('');

  const internal = parseFloat(internalMarks);
  const exam = parseFloat(expectedExamMarks);

  const isValid = !isNaN(internal) && !isNaN(exam) && internal >= 0 && exam >= 0;

  const finalScore = isValid ? internal + exam : 0;

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="internal">Internal Marks</Label>
          <Input
            id="internal"
            type="number"
            placeholder="e.g., 25"
            value={internalMarks}
            onChange={(e) => setInternalMarks(e.target.value)}
            min="0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="exam">Expected Exam Marks</Label>
          <Input
            id="exam"
            type="number"
            placeholder="e.g., 60"
            value={expectedExamMarks}
            onChange={(e) => setExpectedExamMarks(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {isValid && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Predicted Final Score</p>
              <p className="text-5xl font-bold text-primary">{finalScore.toFixed(0)}</p>
              <p className="text-xs text-muted-foreground mt-4">
                Internal ({internal}) + Exam ({exam})
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
