import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // convert cm to m
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      return null;
    }

    const bmi = w / (h * h);
    let category = '';
    let color: 'default' | 'secondary' | 'destructive' = 'default';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'secondary';
    } else if (bmi < 25) {
      category = 'Normal';
      color = 'default';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'secondary';
    } else {
      category = 'Obese';
      color = 'destructive';
    }

    return { bmi, category, color };
  };

  const result = calculateBMI();

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="e.g., 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="e.g., 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {result && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">Your BMI</p>
              <p className="text-5xl font-bold text-primary">{result.bmi.toFixed(1)}</p>
              <Badge variant={result.color} className="text-sm">
                {result.category}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
