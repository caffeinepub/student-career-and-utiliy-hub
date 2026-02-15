import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');

  const calculateAge = () => {
    if (!birthDate) return null;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const age = calculateAge();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="birthdate">Date of Birth</Label>
        <Input
          id="birthdate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      {age && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">Your Age</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">{age.years}</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{age.months}</p>
                  <p className="text-sm text-muted-foreground">Months</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{age.days}</p>
                  <p className="text-sm text-muted-foreground">Days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
