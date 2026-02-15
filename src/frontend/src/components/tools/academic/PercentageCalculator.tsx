import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function PercentageCalculator() {
  const [marksObtained, setMarksObtained] = useState('');
  const [totalMarks, setTotalMarks] = useState('');

  const obtained = parseFloat(marksObtained);
  const total = parseFloat(totalMarks);

  const isValid = !isNaN(obtained) && !isNaN(total) && total > 0 && obtained >= 0 && obtained <= total;

  const percentage = isValid ? (obtained / total) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="obtained">Marks Obtained</Label>
          <Input
            id="obtained"
            type="number"
            placeholder="e.g., 425"
            value={marksObtained}
            onChange={(e) => setMarksObtained(e.target.value)}
            min="0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="total-marks">Total Marks</Label>
          <Input
            id="total-marks"
            type="number"
            placeholder="e.g., 500"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {obtained > total && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Marks obtained cannot exceed total marks</AlertDescription>
        </Alert>
      )}

      {total === 0 && totalMarks !== '' && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Total marks must be greater than 0</AlertDescription>
        </Alert>
      )}

      {isValid && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Your Percentage</p>
              <p className="text-5xl font-bold text-primary">{percentage.toFixed(2)}%</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
