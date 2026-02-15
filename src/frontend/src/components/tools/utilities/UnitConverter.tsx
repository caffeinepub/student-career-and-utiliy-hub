import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

type ConversionType = 'length' | 'weight' | 'temperature';

const conversions = {
  length: {
    units: ['Meters', 'Kilometers', 'Centimeters', 'Feet', 'Inches', 'Miles'],
    toBase: {
      Meters: 1,
      Kilometers: 1000,
      Centimeters: 0.01,
      Feet: 0.3048,
      Inches: 0.0254,
      Miles: 1609.34
    }
  },
  weight: {
    units: ['Kilograms', 'Grams', 'Pounds', 'Ounces'],
    toBase: {
      Kilograms: 1,
      Grams: 0.001,
      Pounds: 0.453592,
      Ounces: 0.0283495
    }
  },
  temperature: {
    units: ['Celsius', 'Fahrenheit', 'Kelvin']
  }
};

export default function UnitConverter() {
  const [type, setType] = useState<ConversionType>('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val) || !fromUnit || !toUnit) return null;

    if (type === 'temperature') {
      return convertTemperature(val, fromUnit, toUnit);
    }

    const conversionData = conversions[type];
    const baseValue = val * conversionData.toBase[fromUnit as keyof typeof conversionData.toBase];
    const result = baseValue / conversionData.toBase[toUnit as keyof typeof conversionData.toBase];
    return result;
  };

  const convertTemperature = (val: number, from: string, to: string) => {
    let celsius = val;

    if (from === 'Fahrenheit') celsius = (val - 32) * (5 / 9);
    if (from === 'Kelvin') celsius = val - 273.15;

    if (to === 'Celsius') return celsius;
    if (to === 'Fahrenheit') return celsius * (9 / 5) + 32;
    if (to === 'Kelvin') return celsius + 273.15;

    return celsius;
  };

  const result = convert();
  const units = conversions[type].units;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Conversion Type</Label>
        <Select
          value={type}
          onValueChange={(value) => {
            setType(value as ConversionType);
            setFromUnit('');
            setToUnit('');
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="length">Length</SelectItem>
            <SelectItem value="weight">Weight</SelectItem>
            <SelectItem value="temperature">Temperature</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="value">Value</Label>
        <Input
          id="value"
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {result !== null && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Result</p>
              <p className="text-4xl font-bold text-primary">
                {result.toFixed(2)} {toUnit}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
