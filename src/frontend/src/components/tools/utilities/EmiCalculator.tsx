import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure);

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
      return null;
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - p;

    return { emi, totalAmount, totalInterest };
  };

  const result = calculateEMI();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="principal">Loan Amount (₹)</Label>
          <Input
            id="principal"
            type="number"
            placeholder="e.g., 500000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rate">Interest Rate (% per annum)</Label>
          <Input
            id="rate"
            type="number"
            placeholder="e.g., 8.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenure">Tenure (months)</Label>
          <Input
            id="tenure"
            type="number"
            placeholder="e.g., 60"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {result && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
              <p className="text-4xl font-bold text-primary">₹{result.emi.toFixed(0)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-lg font-semibold text-foreground">₹{result.totalInterest.toFixed(0)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-lg font-semibold text-foreground">₹{result.totalAmount.toFixed(0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
