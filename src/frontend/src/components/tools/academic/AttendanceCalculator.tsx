import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');

  const total = parseFloat(totalClasses);
  const attended = parseFloat(attendedClasses);

  const isValid = !isNaN(total) && !isNaN(attended) && total > 0 && attended >= 0 && attended <= total;

  const attendancePercentage = isValid ? (attended / total) * 100 : 0;

  const calculateBunkClasses = () => {
    if (!isValid) return 0;
    const requiredPercentage = 75;
    const canBunk = Math.floor((attended - (requiredPercentage / 100) * total) / (requiredPercentage / 100));
    return Math.max(0, canBunk);
  };

  const bunkClasses = calculateBunkClasses();

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="total">Total Classes</Label>
          <Input
            id="total"
            type="number"
            placeholder="e.g., 100"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            min="0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attended">Classes Attended</Label>
          <Input
            id="attended"
            type="number"
            placeholder="e.g., 85"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {attended > total && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Attended classes cannot exceed total classes</AlertDescription>
        </Alert>
      )}

      {isValid && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Your Attendance</p>
              <p className="text-4xl font-bold text-primary">{attendancePercentage.toFixed(2)}%</p>
            </div>

            {attendancePercentage >= 75 ? (
              <Alert className="bg-green-500/10 border-green-500/20">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                  You can bunk <strong>{bunkClasses}</strong> more {bunkClasses === 1 ? 'class' : 'classes'} and still maintain 75% attendance
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Your attendance is below 75%. You need to attend more classes!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
